import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../api/countries.api";
import controlsSlice from "./controls/controlsSlice";
import themeBodySlice from "./themeBody/themeBodySlice";

const store = configureStore({
  reducer: {
    themeBody: themeBodySlice.reducer,
    controls: controlsSlice.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
