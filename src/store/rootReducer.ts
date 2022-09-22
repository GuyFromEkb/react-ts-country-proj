import { combineReducers } from "redux";
import countriesReducer from "./countries/countriesReducer";
import themBodyReducer from "./themeBody/themBodyReducer";

export const rootReducer = combineReducers({
	themeBody: themBodyReducer,
	countries: countriesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
