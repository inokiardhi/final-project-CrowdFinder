import { GET_POST_BEGIN, DELETE_POST_BEGIN } from "./type";

export const getPost = (page = 1) => {
  return {
    type: GET_POST_BEGIN,
    page,
  };
};


export const deletePost = (id) => {
  return {
    type: DELETE_POST_BEGIN,
    id,
  };
};

