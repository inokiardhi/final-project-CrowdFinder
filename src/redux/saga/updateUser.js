import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { PUT_ATTEND_FAIL, PUT_UPDATE_USER_PROFILE_BEGIN, PUT_UPDATE_USER_PROFILE_FAIL, PUT_UPDATE_USER_PROFILE_SUCCESS } from "../action/type";
import Swal from "sweetalert2";

function* userUpdate(action) {
    const Token = localStorage.getItem("user");
    const { fullname,
        location,
        image,
        background_image,
        interest,
        bio } = action;
    try {
        const res = yield axios.put(
            `https://crowdfinder.gabatch13.my.id/api/user`,
            {
                fullname,
                location,
                image,
                background_image,
                interest,
                bio
            },
            { headers: { Authorization: `Bearer ${Token}` } }
        );

        yield put({
            type: PUT_UPDATE_USER_PROFILE_SUCCESS,
            payload: res.data,
        })
        yield (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Done :)',
                showConfirmButton: false,
                timer: 1800
            }));
    } catch (error) {
        yield put({
            type: PUT_UPDATE_USER_PROFILE_FAIL,
            error: error,
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
}
export function* watchUserUpdate() {
    yield takeEvery(PUT_UPDATE_USER_PROFILE_BEGIN, userUpdate)
}





