import { createSlice } from '@reduxjs/toolkit'

export const authModalSlice = createSlice({
  name: 'modal',
  initialState: {
    mode: { signup: false, signin: false },
  },
  reducers: {
    toggleAuthModal: (state, action) => {
      // signup
      if(action.payload === 'signup') {
        state.mode.signup = !state.mode.signup;
        state.mode.signin = false;
        return;
      }

      // close all
      if(action.payload === "close") {
        state.mode.signup = false;
        state.mode.signin = false;
        return;
      }

      // signin
      state.mode.signin = !state.mode.signin;
      state.mode.signup = false;
    },
    closeModal: (state) => {
      state.mode = { signup: false, signin: false };
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleAuthModal, closeModal } = authModalSlice.actions

export default authModalSlice.reducer