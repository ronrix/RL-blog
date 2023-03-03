import { createSlice } from '@reduxjs/toolkit'

export const responseSlice = createSlice({
  name: 'response',
  initialState: {
    value: false,
  },
  reducers: {
    toggleResponseModal: (state) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleResponseModal } = responseSlice.actions

export default responseSlice.reducer