import { createSlice } from '@reduxjs/toolkit'



const initialState = [];

export const alertSlice = createSlice({
  name: "alertSlice",
  initialState,
  reducers: {
      setAlert: (state, action) => {
      const { payload } = action;
      console.log("setAlert -----",payload.msg);
       return [...state, payload];
    },
    
    removeAlert: (state, action) => {
        console.log("removeAlert");
        const { payload } = action;
      return state.filter((alert) => alert.id !== payload.id);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions
export default alertSlice

