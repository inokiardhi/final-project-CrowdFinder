import axios from "axios";
import { GET_COMMENT_BEGIN, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL } from "../action/type";
import { POST_COMMENT_BEGIN, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL } from "../action/type";
import { DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_BEGIN } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";

function* getComments(actions) {
    const { id } = actions;
    try {
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/comment/${id}`);
        yield put({
            type: GET_COMMENT_SUCCESS,
            payload: res.data.data,
        });
    } catch (err) {
        yield put({
            type: GET_COMMENT_FAIL,
            error: err,
        })
    }
};

function* postComments(actions) {
    const { post_id, body } = actions;
    const Token = localStorage.getItem('user');
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/comment/${post_id}`, body, { headers: { Authorization: `Bearer ${Token}` } });
        // yield console.log("ini masuk", res.data.data)
        yield put({
            type: POST_COMMENT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        yield put({
            type: POST_COMMENT_FAIL,
            error: err,
        })
    }
};

function* deleteComments(actions) {
    const Token = localStorage.getItem('user');
    // console.log('ini')
    const { id } = actions;
    try {
        // const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        const res = yield axios.delete(`${BASE_URL_CROWDFINDER}/comment/${id}`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: DELETE_COMMENT_SUCCESS,
            payload: res.data,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Deleted',
                showConfirmButton: false,
                timer: 1800
            })
        );
        // yield window.location.replace("/home")<
    } catch (err) {
        yield put({
            type: DELETE_COMMENT_FAIL,
            error: err,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'this is not your post',
                showConfirmButton: false,
                timer: 1800
            })
        )
    }
};

export function* watchGetComments() {
    yield takeEvery(GET_COMMENT_BEGIN, getComments);
}

export function* watchPostComments() {
    yield takeEvery(POST_COMMENT_BEGIN, postComments);
}

export function* watchDeleteComments() {
    yield takeEvery(DELETE_COMMENT_BEGIN, deleteComments);
}

