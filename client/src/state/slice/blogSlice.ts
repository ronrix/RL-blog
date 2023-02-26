import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    value: {},
  },
  reducers: {
    addBlogs: (state, action) => {
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBlogs } = blogSlice.actions

export default blogSlice.reducer