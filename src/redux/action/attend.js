import { PUT_ATTEND_BEGIN } from "./type"

export const attendEvent = (post_id) => {
    return {
        type: PUT_ATTEND_BEGIN,
        post_id
    }
}