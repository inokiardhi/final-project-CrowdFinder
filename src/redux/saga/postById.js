import axios from "axios";
import {
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_BEGIN,
    GET_POST_BY_ID_FAIL,
} from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";


function* getPostById(action) {
    const Token = localStorage.getItem('user');
    const { page, id } = action;
    yield console.log("ini token", Token)
    yield console.log("ini id di saga", id)
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post/${id}?page=${page}&limit=0`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: GET_POST_BY_ID_SUCCESS,
            payload: res.data.data,
        });
    }
    catch (error) {
        yield put({
            type: GET_POST_BY_ID_FAIL,
            error: error
        })
    }
}

export function* watchGetPostById() {
    yield takeEvery(GET_POST_BY_ID_BEGIN, getPostById)
}
