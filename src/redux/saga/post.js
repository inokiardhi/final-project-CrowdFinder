import axios from "axios";
import {
    GET_POST_BEGIN,
    GET_POST_SUCCESS,
    GET_POST_FAIL,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
    DELETE_POST_BEGIN,
} from "../action/type";
import { BASE_URL_CROWDFINDER} from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";

function* getPosts(actions) {
    const Token = localStorage.getItem('user');
    // console.log('ini')
    const { page } = actions;
    try {
        // const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=1&limit=0`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: GET_POST_SUCCESS,
            payload: res.data.data.reverse(),
        });
    } catch (error) {
        yield put({
            type: GET_POST_FAIL,
            error: error,
        })
    }
};

function* deletePosts(actions) {
    const Token = localStorage.getItem('user');
    // console.log('ini')
    const { id } = actions;
    try {
        // const res = yield axios.get(`${BASE_URL_CROWDFINDER}/post?page=${page}&limit=9`, {headers: {Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiNjEyMzkzNTgxODg1ZmY4ZTE3NWZlY2IzIiwiaWF0IjoxNjI5ODYzOTY0LCJleHAiOjE2MzA0Njg3NjR9.H1dJ6RQiVTzxzwQxTVa5TbSBWLf09KLtwAAoIEwGirs`}});
        const res = yield axios.delete(`${BASE_URL_CROWDFINDER}/post/${id}`, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: DELETE_POST_SUCCESS,
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
            type: DELETE_POST_FAIL,
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




export function* watchGetPosts() {
    yield takeEvery(GET_POST_BEGIN, getPosts);
}

export function* watchDeletePosts() {
    yield takeEvery(DELETE_POST_BEGIN, deletePosts);
}

