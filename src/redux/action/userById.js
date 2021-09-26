import { GET_USER_BY_ID_BEGIN } from "./type"


export const getUserById = (id) => {
    return {
        type: GET_USER_BY_ID_BEGIN,
        id,
    }
}