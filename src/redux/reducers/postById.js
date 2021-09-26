import { GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_BEGIN, GET_POST_BY_ID_FAIL } from "../action/type";

const initialState = {
    postbyid: [],
    loading: false,
    error: null,
}

const postsId = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case GET_POST_BY_ID_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                postbyid: payload,
                // postbyid: [payload, ...state.postbyid],
                loading: false,
                error: null,
            }
        case GET_POST_BY_ID_FAIL:
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

export default postsId;