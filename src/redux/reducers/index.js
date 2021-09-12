import { combineReducers } from "redux";
import userData from "./user"
import posts from "./post";
import postsId from "./postById";
import events from "./event";
import announcements from "./announcement";
import comments from "./comment";
import likes from "./like";
import searchData from "./search"
import getUserById from "./userById"
import attendEvent from "./attend";
import followUser from "./followUser";
import updateUser from "./updateUser";
import notification from "./notification"


export default combineReducers({
    userData,
    posts,
    postsId,
    events,
    announcements,
    comments,
    likes,
    searchData,
    getUserById,
    attendEvent,
    followUser,
    updateUser,
    notification,
});
