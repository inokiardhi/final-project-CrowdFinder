import { POST_ANNOUNCEMENT_BEGIN, POST_ANNOUNCEMENT_SUCCESS, POST_ANNOUNCEMENT_FAIL } from "../action/type";
import { UPDATE_ANNOUNCEMENT_BEGIN, UPDATE_ANNOUNCEMENT_SUCCESS, UPDATE_ANNOUNCEMENT_FAIL } from "../action/type";


const initialState = {
    listAnnouncement : [],
    loading : false,
    error : null,
}

const announcements = (state = initialState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case POST_ANNOUNCEMENT_BEGIN:
            return {
                ...state,
                loading : true
            };
        case POST_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                listAnnouncement : payload,
                loading : false,
                error : null
            };
        case POST_ANNOUNCEMENT_FAIL:
            return {
                ...state,
                loading : false,
                error : error,
            };

        case UPDATE_ANNOUNCEMENT_BEGIN:
            return {
                ...state,
                loading : true
            };
        case UPDATE_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                listAnnouncement : payload,
                loading : false,
                error : null
            };
        case UPDATE_ANNOUNCEMENT_FAIL:
            return {
                ...state,
                loading : false,
                error : error,
            };

        default :
            return {
                ...state,
            };
    }

}

export default announcements