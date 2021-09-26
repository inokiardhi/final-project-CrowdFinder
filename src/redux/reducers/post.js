import {
  GET_POST_BEGIN,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  DELETE_POST_BEGIN,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from "../action/type";

const initialState = {
  listPost: [],
  loading: false,
  error: null,
};

const posts = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case GET_POST_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                listPost: payload,
                loading: false,
                error: null,
            };
        case GET_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        case DELETE_POST_BEGIN :
            return {
                ...state,
                loading : true,
            };
        case DELETE_POST_SUCCESS :
            return {
                ...state,
                loading : false,
                error : null,
            };
        case DELETE_POST_FAIL :
            return {
                ...state,
                loading : false,
                error : error,
            }
        default :
            return {
                ...state,
            };
    }
}

export default posts;
