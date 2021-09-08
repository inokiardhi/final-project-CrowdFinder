import { GET_COMMENT_BEGIN, GET_COMMENT_SUCCESS, GET_COMMENT_FAIL } from "../action/type";
import { POST_COMMENT_BEGIN, POST_COMMENT_SUCCESS, POST_COMMENT_FAIL } from "../action/type";
import { DELETE_COMMENT_BEGIN, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAIL } from "../action/type";
const initialState = {
    listComment: [],
    loading: false,
    error: null,

}

const comments = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case GET_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                // listComment: [...payload.reverse(), ...state.listComment],
                listComment: [...payload.reverse(), ...state.listComment],
                loading: false,
                error: null,
            };
        case GET_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        case POST_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                listComment: [payload, ...state.listComment],
                loading: false,
                error: null,
            };
        case POST_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            };
        case DELETE_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                listComment: state.listComment.filter((item) => item.id !== action.id),
                loading: false,
                error: null,
            };
        case DELETE_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        default:
            return {
                ...state,
            };
    }
}

export default comments;