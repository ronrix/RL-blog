import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice";
import authModalReducer from "./slice/authModalSlice";

import Cookie from "js-cookie";

export default configureStore({
  reducer: {
    user: userReducer,
    authModal: authModalReducer
  }
})

export const authCookie = Cookie.get("c_user");