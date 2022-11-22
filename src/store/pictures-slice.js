import { createSlice } from "@reduxjs/toolkit";

const initialState = { changer : false};

const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    changerHandler(state) {
      state.changer = !state.changer;
      },
  },
});

export const picturesSliceActions = picturesSlice.actions;

export default picturesSlice;