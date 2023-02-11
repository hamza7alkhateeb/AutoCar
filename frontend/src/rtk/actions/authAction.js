
import axios from "axios";
import { loginFail, loginSuccess, logout, signupFail, signupSuccess } from "../slice/auth-slice";
import { actionAlert } from "./actionAlert";

export const authLogin = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/token/",
      body,
      config
      );
      dispatch(loginSuccess(res.data));
      dispatch(actionAlert("Authenticated successfully", "success"));
  } catch (err) {
      dispatch(loginFail());
      dispatch(actionAlert("Authenticated Fail", "fail"));
    
  }
};


export const authSignup =( name, email, password, password2 ) =>
      async (dispatch) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
          };
          const body = JSON.stringify({ name, email, password, password2 });
          if (password !== password2) {
              dispatch(signupFail());
              dispatch(actionAlert("Passwords do not match", "error"));
          }else{
              try {
                const res = await axios.post(
                  `http://127.0.0.1:8000/api/accounts/signup`,
                  body,
                  config
                );
                  
                  if (res.data.error) {
                      dispatch(signupFail());
                      dispatch(actionAlert(("Authenticated Fail", res.data.error)));;
                  } else {
                      dispatch(signupSuccess(res.data));
                      dispatch(authLogin(email, password));
                  }
              } catch (err) {
                dispatch(signupFail());
               dispatch(actionAlert(("Authenticated Fail", "fail")));
            }
        }

          
          
  };








export const authLogout = () => dispatch => {
    dispatch(logout());
    dispatch(actionAlert("logout successful.", "success"));
}


