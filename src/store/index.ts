import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_slice";
import changerSlice from "./changer-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    changer: changerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
