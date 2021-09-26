import { POST_EVENT_BEGIN, POST_EVENT_SUCCESS, POST_EVENT_FAIL } from "../action/type";


const initialState = {
    listEvent: [],
    loading: false,
    error: null,
}

const events = (state = initialState, action) => {
    const { type, payload, error } = action;
    // console.log('ini')
    switch (type) {
        case POST_EVENT_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case POST_EVENT_SUCCESS:
            return {
                ...state,
                listEvent: payload,
                loading: false,
                error: null,
            };
        case POST_EVENT_FAIL:
            return {
                ...state,
                loading: false,
                error: error,
            };
        default:
            return {
                ...state,
            };
    }

}

export default events