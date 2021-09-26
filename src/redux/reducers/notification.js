import {
  GET_NOTIFICATION_BEGIN,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_FAIL,
} from "../action/type";

const initialState = {
  notif: [],
  loading: false,
  error: null,
};

const notification = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case GET_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notif: payload,
        loading: false,
        error: null,
      };
    case GET_NOTIFICATION_FAIL:
      return {
        ...state,
        notif: [],
        loading: false,
        error: error,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default notification;