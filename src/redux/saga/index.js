import { all } from "@redux-saga/core/effects";
import {
  watchPostAnnouncements,
  watchUpdateAnnouncement,
} from "./announcement";
import {
  watchDeleteComments,
  watchGetComments,
  watchPostComments
} from "./comment";
import { watchPostEvents } from "./event";
import { watchDeletePosts, watchGetPosts } from "./post";
import { watchGetPostById } from "./postById";
import {
  watchRegister,
  watchLogin,
  watchLogout,
  watchGetUser,
} from "./user";
import { watchPutLikes } from "./like";
import { watchSearchFunction } from "./search";
import { watchGetUserById } from "./userById";
import { watchAttendEvent } from "./attend";
import { watchFollowUser } from "./followUser";
import { watchUserUpdate } from "./updateUser";
import {watchNotification} from "./notification"

export default function* rootSaga() {
  yield all([
    watchRegister(),
    watchLogin(),
    watchLogout(),
    watchGetUser(),
    watchGetPosts(),
    watchPostEvents(),
    watchPostAnnouncements(),
    watchGetComments(),
    watchPostComments(),
    watchGetPostById(),
    watchPutLikes(),
    watchDeletePosts(),
    watchUpdateAnnouncement(),
    watchSearchFunction(),
    watchGetUserById(),
    watchAttendEvent(),
    watchDeleteComments(),
    watchFollowUser(),
    watchUserUpdate(),
    watchNotification(),
  ]);
}
