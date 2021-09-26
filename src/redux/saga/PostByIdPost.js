import axios from "axios";
import {
    GET_POST_BY_ID_POST_SUCCESS,
    GET_POST_BY_ID_POST_BEGIN,
    GET_POST_BY_ID_POST_FAIL,
} from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";


function* getPostByIdPosts(action) {
    const Token = localStorage.getItem('user');
    const { page, id } = action;
    yield console.log("ini token masuk", Token)
    try {
        const res = yield axios.get(`https://crowdfinder.gabatch13.my.id/api/post/${id}?page=${page}&limit=0`, { headers: { Authorization: `Bearer ${Token}` } });        yield put({
            type: GET_POST_BY_ID_POST_SUCCESS,
            payload: res.data.data,
        });
    }
    catch (error) {
        yield put({
            type: GET_POST_BY_ID_POST_FAIL,
            error: error
        })
    }
}

export function* watchGetPostByIdPost() {
    yield takeEvery(GET_POST_BY_ID_POST_BEGIN, getPostByIdPosts)
}
