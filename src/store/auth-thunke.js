import { loginSliceActions } from "./login_slice";
import { signupSliceActions } from "./signup_slice";
import axios from "axios";

export const sendUserLogInInformation = (userName, password) => {
  return async (dispatch) => {
    const postData = { username: userName, password: password };

    try {
      const res = await axios.post(
        "http://137.74.230.245:8000/login",
        postData
      );
      console.log(res.data);
      dispatch(
        loginSliceActions.requestResponseHandler({
          message: "loggedin successfully",
        })
      );
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
    } catch {
      dispatch(
        loginSliceActions.requestResponseHandler({
          message: "username or password incorect",
        })
      );
    }
  };
};

export const sendUserSignUpInformation = (Email, UserName, Password) => {
  return async (dispatch) => {
    const postData = { username: UserName, password: Password, email: Email };

    try {
      const res = await axios.post(
        "http://137.74.230.245:8000/register",
        postData
      );
      console.log(res.data);
      dispatch(
        signupSliceActions.requestResponseHandler({
          message: "signedup successfully",
        })
      );
      localStorage.setItem("username", UserName);
      localStorage.setItem("password", Password);
    } catch {
      dispatch(
        signupSliceActions.requestResponseHandler({
          message: "signingun failed ",
        })
      );
    }
  };
};
