import axios from "axios";
import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  BASE_URL_CROWDFINDER,
  LOGOUT,
  GET_USER_SUCCESS,
  GET_USER_CROWDFINDER,
  GET_USER_DETAIL_CROWDFINDER,
  // GET_USER_ID,
  GET_USER_BEGIN,
  GET_USER_FAIL,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_SUCCESS,
} from "../action/type";
import { put, takeEvery, takeLatest } from "redux-saga/effects";

function* Register(actions) {
  const { role, email, password, username, fullname, location, interest } =
    actions;
  try {
    const res = yield axios
      .post(`${BASE_URL_CROWDFINDER}/user/signup`, {
        role,
        email,
        password,
        username,
        fullname,
        location,
        interest,
      })
      .then((response) => {
        localStorage.setItem("user", response.data.token);
      });
    yield window.location.replace("/signin");
    yield put({
      type: REGISTER_SUCCESS,
      payload: res.data,
      loading: false,
      error: null,
    });
  } catch (error) {
    yield put({
      type: REGISTER_FAIL,
      error: error,
    });
  }
}

function* Login(actions) {
  const { email, password } = actions;
  try {
    const res = yield axios.post(`${BASE_URL_CROWDFINDER}/user/signin`, {
      email,
      password,
    });
    yield localStorage.setItem("user", res.data.token);
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data.token,
    });
    yield window.location.replace("/home");
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      error: error,
    });
  }
}

function* getUser() {
  const Token = yield localStorage.getItem("user");
  try {
    const res = yield axios.get(`${GET_USER_CROWDFINDER}`
    , {headers: { Authorization: `Bearer ${Token}` },}
    );
    yield put({
      type: GET_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_USER_FAIL,
      error: error,
    });
  }
}


function* Logout() {
  yield localStorage.removeItem("user");
  yield window.location.replace("/")
}

export function* watchRegister() {
  yield takeEvery(REGISTER_BEGIN, Register);
}

export function* watchLogin() {
  yield takeLatest(LOGIN_BEGIN, Login);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, Logout);
}

export function* watchGetUser() {
  yield takeLatest(GET_USER_BEGIN, getUser);
}
