import { GET_POST_BY_ID_POST_SUCCESS, GET_POST_BY_ID_POST_BEGIN, GET_POST_BY_ID_POST_FAIL } from "../action/type";

const initialState = {
    ByIdPost: [],
    loading: false,
    error: null,
}

const postByIdPost = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case GET_POST_BY_ID_POST_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_BY_ID_POST_SUCCESS:
            return {
                ...state,
                ByIdPost: payload,
                // postbyid: [payload, ...state.postbyid],
                loading: false,
                error: null,
            }
        case GET_POST_BY_ID_POST_FAIL:
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

export default postByIdPost;