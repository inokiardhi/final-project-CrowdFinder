import axios from "axios";
import { POST_EVENT_BEGIN, POST_EVENT_SUCCESS, POST_EVENT_FAIL } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";

function* PostEvents(actions) {
    const Token = localStorage.getItem('user');
    const { data } = actions;
    // console.log('actions', actions)
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/post/event`, data, { headers: { Authorization: `Bearer ${Token}` } });
        // console.log('form', res)
        yield put({
            type: POST_EVENT_SUCCESS,
            payload: res.data,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Done :)',
                showConfirmButton: false,
                timer: 1800
            })
        );
    } catch (err) {
        yield put({
            type: POST_EVENT_FAIL,
            error: err,
        })
        yield (
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Check your form, Please :(',
                showConfirmButton: false,
                timer: 1800
            })
        );
    }
};

export function* watchPostEvents() {
    yield takeEvery(POST_EVENT_BEGIN, PostEvents);
}