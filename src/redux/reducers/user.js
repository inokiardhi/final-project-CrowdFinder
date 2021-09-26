import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  LOGOUT,
  UPDATE_USER_PROFILE,
  UPDATE_USER_PROFILE_BEGIN,
} from "../action/type";

// const users = JSON.parse(localStorage.getItem("user"));

const initialState = { isLoggedIn: false, loading: false, user: [], error: null };

const userData = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: payload,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: [],
        error: error,
      };
    case REGISTER_BEGIN:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: payload,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: null,
        error: error,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      };
    case GET_USER_BEGIN:
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        loading: false,
        error: null,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: [],
        error: error,
      };

    default:
      return state;
  }
};

export default userData;
