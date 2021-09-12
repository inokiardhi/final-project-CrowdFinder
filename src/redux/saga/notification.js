import {
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_FAIL,
  BASE_URL_CROWDFINDER,
} from "../action/type";
import axios from "axios";
import { takeEvery, put } from "@redux-saga/core/effects";

function* GetNotificaiton() {
  const Token = yield localStorage.getItem("user");
  try {
    const res = yield axios.get(`${BASE_URL_CROWDFINDER}/notification/`, {
      headers: { Authorization: `Bearer ${Token}` },
    });
    yield put({
        type: GET_NOTIFICATION_SUCCESS,
        payload: res.data,
    });
  } catch (error) {
      yield put ({
          type:GET_NOTIFICATION_FAIL,
          error:error,
      });
  };
};

export function* watchNotification() {
yield takeEvery(GET_NOTIFICATION_BEGIN,GetNotificaiton);
}
