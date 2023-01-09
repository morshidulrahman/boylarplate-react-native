import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./features/currentUserSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
  },
});
