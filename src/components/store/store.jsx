import {configureStore} from "@reduxjs/toolkit"
import BookReducer from "../reducers/BookReducer";
import UserReducer from "../reducers/UserReducer"

export const store = configureStore({
  reducer: {
    user: UserReducer,
    books : BookReducer
  },
});