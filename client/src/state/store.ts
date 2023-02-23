import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/userSlice";
import authModalReducer from "./slice/authModalSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    authModal: authModalReducer
  }
})