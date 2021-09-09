import { POST_EVENT_BEGIN } from "./type";

export const postEvent = (data) => {
    // console.log('ini')
    return {
      type: POST_EVENT_BEGIN,
      data
    };
  };
