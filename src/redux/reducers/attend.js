import { PUT_ATTEND_BEGIN, PUT_ATTEND_FAIL, PUT_ATTEND_SUCCESS } from "../action/type";

const initialState = {
    attend: [],
    loading: false,
    error: null,
}

const attendEvent = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {
        case PUT_ATTEND_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case PUT_ATTEND_SUCCESS:
            return {
                ...state,
                listComment: [payload, ...state.attend],
                loading: false,
                error: null,
            };
        case PUT_ATTEND_FAIL:
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

export default attendEvent;