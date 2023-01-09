import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: [],
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    getCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
