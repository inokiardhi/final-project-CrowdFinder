import { PUT_UPDATE_USER_PROFILE_BEGIN, PUT_UPDATE_USER_PROFILE_SUCCESS, PUT_UPDATE_USER_PROFILE_FAIL } from "../action/type";

const initialState = {
    bodyprofile: [],
    loading: false,
    error: null,
}

const updateUser = (state = initialState, action) => {
    const { type, payload, error } = action;
    switch (type) {

        case PUT_UPDATE_USER_PROFILE_BEGIN:
            return {
                ...state,
                loading: true
            };
        case PUT_UPDATE_USER_PROFILE_SUCCESS:
            return {
                ...state,
                bodyprofile: payload,
                loading: false,
                error: null
            };
        case PUT_UPDATE_USER_PROFILE_FAIL:
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

export default updateUser