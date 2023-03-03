import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice";
import authModalReducer from "./slice/authModalSlice";
import blogReducer from "./slice/blogSlice";
import searchReducer from "./slice/searchSlice";

import Cookie from "js-cookie";

export default configureStore({
  reducer: {
    user: userReducer,
    authModal: authModalReducer,
    blogs: blogReducer,
    search: searchReducer 
  }
})

export const authCookie = Cookie.get("c_user");