import { createSlice } from "@reduxjs/toolkit";

const initialState = { requestResponse: "" };

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    requestResponseHandler(state, actions) {
      state.requestResponse = actions.payload.message;
    },
  },
});

export const signupSliceActions = signupSlice.actions;

export default signupSlice;
