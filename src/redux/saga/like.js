import axios from "axios";
import { PUT_LIKE_BEGIN, PUT_LIKE_SUCCESS, PUT_LIKE_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";
import { getPost } from "../action/post";


function* putLikes(actions) {
    const Token = localStorage.getItem('user');
    const { id } = actions;

    try {
        const res = yield axios.put(`${BASE_URL_CROWDFINDER}/post/like/${id}`, {}, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: PUT_LIKE_SUCCESS,
            payload: res.data,
        });
        yield getPost()
    } catch (err) {
        yield put({
            type: PUT_LIKE_FAIL,
            error: err,
        });
    };
};




export function* watchPutLikes() {
    yield takeEvery(PUT_LIKE_BEGIN, putLikes);
};