import { GET_POST_BY_ID_BEGIN } from "./type";

export const getPostById = (page, id) => {
    return {
        type: GET_POST_BY_ID_BEGIN,
        page,
        id,
    }
}
