import { createSlice } from "@reduxjs/toolkit";

interface IChangerState {
  changer: number;
}

const initialState = { changer: 0 };

const changerSlice = createSlice({
  name: "changer",
  initialState,
  reducers: {
    changerHandler(state) {
      state.changer++;
    },
  },
});

export const changerSliceActions = changerSlice.actions;

export default changerSlice;
