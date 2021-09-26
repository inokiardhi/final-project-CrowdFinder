import { FOLLOW_USER_BEGIN } from "./type"

export const followUser = (id) => {
    return {
        type: FOLLOW_USER_BEGIN,
        id,
    }
}