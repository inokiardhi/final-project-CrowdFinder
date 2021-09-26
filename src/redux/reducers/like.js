import { PUT_LIKE_BEGIN, PUT_LIKE_SUCCESS, PUT_LIKE_FAIL } from "../action/type";

const initialState = {
    like: [],
    loading: false,
    error: null,
}

const likes = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case PUT_LIKE_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case PUT_LIKE_SUCCESS:
            return {
                ...state,
                like : payload,
                loading : false,
                error : null,
            };
        case PUT_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            }
        default :
            return {
                ...state,
            };
    }
}

export default likes;