import { GET_COMMENT_BEGIN, POST_COMMENT_BEGIN, DELETE_COMMENT_BEGIN, CLEAR_COMMENT } from "./type";

export const getComment = (id) => {
  // console.log('ini action')
  return {
    type: GET_COMMENT_BEGIN,
    id,
  };
};

export const postComment = (post_id, body) => {
  // console.log('ini action')
  return {
    type: POST_COMMENT_BEGIN,
    post_id,
    body,
  };
};

export const deleteComment = (id) => {
  // console.log('ini action')
  return {
    type: DELETE_COMMENT_BEGIN,
    id,
  };
};

export const clearComment = () => {
  return {
    type: CLEAR_COMMENT
  }
}

