import axios from "axios";
import { put, takeEvery } from "@redux-saga/core/effects";
import { PUT_ATTEND_FAIL, PUT_UPDATE_USER_PROFILE_BEGIN, PUT_UPDATE_USER_PROFILE_SUCCESS } from "../action/type";

function* userUpdate(action) {
    const Token = localStorage.getItem("user");
    const { interest, fullname, username, email, location, image, bio } = action;
    try {
        const res = yield axios.put(
            `https://crowdfinder.gabatch13.my.id/api/user`,
            { interest, fullname, username, email, location, image, bio },
            { headers: { Authorization: `Bearer ${Token}` } }
        );
        yield put({
            type: PUT_UPDATE_USER_PROFILE_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        yield put({
            type: PUT_ATTEND_FAIL,
            error: error,
        });
    }
}
export function* watchUserUpdate() {
    yield takeEvery(PUT_UPDATE_USER_PROFILE_BEGIN, userUpdate)
}





