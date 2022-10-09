
import API from "../api";
import { configureStore } from "@reduxjs/toolkit";
import themBodyReducer from "./themeBody/themBodyReducer";

// const initialState = { ...getUserTheme() };

const thunkArgument = {
  API,
};

export type TypeThunkArgument = typeof thunkArgument;

const store = configureStore({
  reducer: {
    themeBody: themBodyReducer,
  },
});

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk.withExtraArgument(thunkArgument)))
// );

export type TypeGetState = typeof store.getState;

export default store;
