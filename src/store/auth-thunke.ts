import { authSliceActions } from "./auth_slice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthData } from "src/interfaces";
import axios from "../api";

export const sendUserLogInInformation = createAsyncThunk(
  "users/login",
  async ({ username, password }: IAuthData, { dispatch }) => {
    const postData = { username, password };
    try {
      const response = await axios.post("/login", postData);
      dispatch(
        authSliceActions.requestResponseHandler("loggedin successfully")
      );
      console.log(response.data);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (err) {
      dispatch(
        authSliceActions.requestResponseHandler("username or password incorect")
      );
    }
  }
);

export const sendUserSignUpInformation = createAsyncThunk(
  "users/signup",
  async ({ username, password, email }: IAuthData, { dispatch }) => {
    const postData = { username, password, email };
    try {
      const response = await axios.post("/register", postData);
      dispatch(
        authSliceActions.requestResponseHandler("signedup successfully")
      );
      console.log(response.data);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (err) {
      dispatch(authSliceActions.requestResponseHandler("signingun failed "));
    }
  }
);
