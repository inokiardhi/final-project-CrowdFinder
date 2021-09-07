import axios from "axios";
import { POST_ANNOUNCEMENT_BEGIN, POST_ANNOUNCEMENT_SUCCESS, POST_ANNOUNCEMENT_FAIL } from "../action/type";
import { UPDATE_ANNOUNCEMENT_SUCCESS, UPDATE_ANNOUNCEMENT_FAIL, UPDATE_ANNOUNCEMENT_BEGIN } from "../action/type";
import { BASE_URL_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";
import Swal from "sweetalert2";

const Token = localStorage.getItem('user');

function* PostAnnouncements(actions) {
    const { data } = actions;
    try {
        const res = yield axios.post(`${BASE_URL_CROWDFINDER}/post/announcement`, data, { headers: { Authorization: `Bearer ${Token}`} });
        yield put({
            type: POST_ANNOUNCEMENT_SUCCESS,
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
        // yield window.location.replace("/home")
    } catch (err) {
        yield put({
            type: POST_ANNOUNCEMENT_FAIL,
            error: err,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Filled the form, Please :(',
                showConfirmButton: false,
                timer: 1800
            })
        );
    }
};

function* UpdateAnnouncement(actions) {
    const { data, id } = actions;
    try {
        const res = yield axios.put(`${BASE_URL_CROWDFINDER}/post/announcement/${id}`, data, { headers: { Authorization: `Bearer ${Token}` } });
        yield put({
            type: UPDATE_ANNOUNCEMENT_SUCCESS,
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
        yield window.location.replace("/home")
    } catch (err) {
        yield put({
            type: UPDATE_ANNOUNCEMENT_FAIL,
            error: err,
        });
        yield (
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Filled the form, Please :(',
                showConfirmButton: false,
                timer: 1800
            })
        );
    };

};


export function* watchPostAnnouncements() {
    yield takeEvery(POST_ANNOUNCEMENT_BEGIN, PostAnnouncements);
};

export function* watchUpdateAnnouncement() {
    yield takeEvery(UPDATE_ANNOUNCEMENT_BEGIN, UpdateAnnouncement);
};


