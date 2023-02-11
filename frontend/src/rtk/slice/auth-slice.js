import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
          console.log("loginSuccess");
          const {payload}=action
      localStorage.setItem("token", payload.access);
      return {
        ...state,
        token: payload.access,
        isAuthenticated: true,
        loading: false,
      };
    },
    signupSuccess: (state, action) => {
      console.log("signupSuccess");
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    },
    loginFail: (state, action) => {
      console.log("loginFail");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    signupFail: (state, action) => {
      console.log("signupFail");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    logout: (state, action) => {
      console.log("logout");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
});
export const { loginSuccess, signupSuccess, loginFail, signupFail, logout } =
  authSlice.actions;
export default authSlice;
