import { FOLLOW_USER_BEGIN, FOLLOW_USER_FAIL, FOLLOW_USER_SUCCESS } from "../action/type";

const intialState = {
    dataFollow: [],
    loading: false,
    error: null,
}

const followUser = (state = intialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case FOLLOW_USER_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case FOLLOW_USER_SUCCESS:
            return {
                ...state,
                dataFollow: payload,
                loading: false,
                error: null
            }
        case FOLLOW_USER_FAIL:
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
export default followUser;