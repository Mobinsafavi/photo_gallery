import { createSlice } from "@reduxjs/toolkit";

const initialState = { changer : false};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    changerHandler(state) {
      state.changer = !state.changer;
      },
  },
});

export const albumsSliceActions = albumsSlice.actions;

export default albumsSlice;
