import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "", password: "", isLoggedIn: false , requestResponse: null };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserLoginInfo(state, actions) {
      state.userName = actions.payload.UserName;
      state.password = actions.payload.password;
    },
    logInHandler(state) {
      state.isLoggedIn = true;
    },
    requestResponseHandler(state, actions) {
      state.requestResponse = actions.payload.message
    }
  },
});

export const loginSliceActions = loginSlice.actions;

export default loginSlice;
