import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    value: {},
    blog: {}, // stores which blog to display
  },
  reducers: {
    addBlogs: (state, action) => {
      state.value = action.payload;
    },
    toDisplayBlog: (state, action) => {
      state.blog = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addBlogs, toDisplayBlog } = blogSlice.actions

export default blogSlice.reducer