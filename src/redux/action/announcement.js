import { POST_ANNOUNCEMENT_BEGIN, UPDATE_ANNOUNCEMENT_BEGIN } from "./type";

export const postAnnouncement = (data) => {
  console.log(data)
  return {
    type: POST_ANNOUNCEMENT_BEGIN,
    data
  };
};

export const updateAnnouncement = (data, id) => {
  return {
    type: UPDATE_ANNOUNCEMENT_BEGIN,
    data,
    id,
  };
};


