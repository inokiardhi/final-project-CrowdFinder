import axios from "axios";
import {
  GET_SEARCH_BEGIN,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from "../action/type";
import { BASE_URL_SEARCH_CROWDFINDER } from "../action/type";
import { put, takeEvery } from "@redux-saga/core/effects";

function* searchFunction(actions) {
  const Token = yield localStorage.getItem("user");
  const { body } = actions;
  try {
    const res = yield axios.get(`${BASE_URL_SEARCH_CROWDFINDER}${body}?page=1&limit=5`
    ,{headers: { Authorization: `Bearer ${Token}` },}
    );
    yield put({
      type: GET_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_SEARCH_FAIL,
      error: err,
    });
  }
}

export function* watchSearchFunction() {
    yield takeEvery(GET_SEARCH_BEGIN, searchFunction);
  }
  