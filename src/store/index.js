import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login_slice";

const store = configureStore({ reducer: {login : loginSlice.reducer} })

export default store;