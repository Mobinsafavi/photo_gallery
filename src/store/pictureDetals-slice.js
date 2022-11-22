import { createSlice } from "@reduxjs/toolkit";

const initialState = { changer : false};

const pictureDetailsSlice = createSlice({
  name: "pictureDetails",
  initialState,
  reducers: {
    changerHandler(state) {
      state.changer = !state.changer;
      },
  },
});

export const pictureDetailsSliceActions = pictureDetailsSlice.actions;

export default pictureDetailsSlice;
