import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login_slice";
import signupSlice from "./signup_slice";
import albumsSlice from "./albums-slice";
import picturesSlice from "./pictures-slice";
import pictureDetailsSlice from "./pictureDetals-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    albums: albumsSlice.reducer,
    pictures: picturesSlice.reducer,
    pictureDetalils: pictureDetailsSlice.reducer
  },
});

export default store;
