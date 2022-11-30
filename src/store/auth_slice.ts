import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface IRequestResponse {
  requestResponse: string
}


const initialState: IRequestResponse = { requestResponse: '' };

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestResponseHandler(state, actions : PayloadAction<string>) {
      state.requestResponse = actions.payload
    }
  },
});

export const authSliceActions = authSlice.actions;

export default authSlice;
