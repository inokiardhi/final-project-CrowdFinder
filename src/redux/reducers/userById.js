import { GET_USER_BY_ID_SUCCESS, GET_USER_BY_ID_BEGIN, GET_USER_BY_ID_FAIL } from "../action/type";

const initialState = {
    userbyid: [],
    loading: false,
    error: null,
}

const getUserById = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case GET_USER_BY_ID_BEGIN:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                userbyid: payload,
                loading: false,
                error: null,
            }
        case GET_USER_BY_ID_FAIL:
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

export default getUserById;