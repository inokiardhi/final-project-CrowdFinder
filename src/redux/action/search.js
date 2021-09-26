import {
  GET_SEARCH_BEGIN, CLEAR,
} from "./type";

export const searchFunction = (body) => {
  return {
    type: GET_SEARCH_BEGIN,
    body,
}
};

export const clearPost = () => {
    return {
      type: CLEAR,
    };
  };
  
