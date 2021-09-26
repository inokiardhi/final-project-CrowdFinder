import { PUT_LIKE_BEGIN } from "./type";

export const putLike = (id) => {
    // console.log('ini action')
      return {
        type: PUT_LIKE_BEGIN,
        id,
      };
};