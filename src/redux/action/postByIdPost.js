import { GET_POST_BY_ID_POST_BEGIN } from "./type";

export const getPostByIdPost = (page, id) => {
    return {
        type: GET_POST_BY_ID_POST_BEGIN,
        page,
        id,
    }
}
