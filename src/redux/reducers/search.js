import {
  GET_SEARCH_BEGIN,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
  CLEAR,
} from "../action/type";

const initialState = {
    search: [],
    loading: false,
    error: null,
  };

const searchData = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
       case GET_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        search: payload,
        loading: false,
        error: null,
      };
    case GET_SEARCH_FAIL:
      return {
        ...state,
        search: [],
        loading: false,
        error: error,
      };
    case CLEAR:
      return {
        ...state,
        search: [],
        loading: false,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchData;
