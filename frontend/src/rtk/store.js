import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth-slice";
import { alertSlice } from "./slice/alert-slice";
import listingsSlice from "./slice/listings-slice";

export const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    auth: authSlice.reducer,
    listings: listingsSlice.reducer,
  },
});