import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice";
import authModalReducer from "./slice/authModalSlice";
import blogReducer from "./slice/blogSlice";
import searchReducer from "./slice/searchSlice";
import responseReducer from "./slice/responseSlice";

import Cookie from "js-cookie";

export default configureStore({
  reducer: {
    user: userReducer,
    authModal: authModalReducer,
    blogs: blogReducer,
    search: searchReducer,
    response: responseReducer,
  }
})

export const authCookie = Cookie.get("c_user");