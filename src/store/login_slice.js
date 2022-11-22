import { createSlice } from "@reduxjs/toolkit";

const initialState = { requestResponse: '' };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestResponseHandler(state, actions) {
      state.requestResponse = actions.payload.message
    }
  },
});

export const loginSliceActions = loginSlice.actions;

export default loginSlice;
