import { createSlice } from "@reduxjs/toolkit";

const initialState = { email: "", userName: "", password: "" };

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUserSignUpInfo(state, actions) {
      state.email = actions.payload.Email;
      state.userName = actions.payload.UserName;
      state.password = actions.payload.password;
    },
  },
});

export const signupSliceActions = signupSlice.actions;

export default signupSlice;
