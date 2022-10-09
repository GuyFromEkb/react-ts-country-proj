import API from "../api";
import { configureStore } from "@reduxjs/toolkit";
import themeBodySlice from "./themeBody/themeBodySlice";

// const initialState = { ...getUserTheme() };

const thunkArgument = {
  API,
};

export type TypeThunkArgument = typeof thunkArgument;

const store = configureStore({
  reducer: {
    themeBody: themeBodySlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export type TypeGetState = typeof store.getState;

export default store;
