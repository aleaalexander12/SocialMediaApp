import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    // add more reducers as needed
  },
});

// ✅ Export the actions
export const { addPost } = postSlice.actions;

// ✅ Export reducer as default
export default postSlice.reducer;