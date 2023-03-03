import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: [],
  },
  reducers: {
    searchQuery: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchQuery } = searchSlice.actions

export default searchSlice.reducer