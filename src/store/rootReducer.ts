import { combineReducers } from "redux";
import countriesReducer from "./countries/countriesReducer";
import countryInfoReducer from "./countryInfo/countryInfoReducer";
import filterReducer from "./filters/filterReducer";
import themBodyReducer from "./themeBody/themBodyReducer";

export const rootReducer = combineReducers({
	themeBody: themBodyReducer,
	countries: countriesReducer,
	country: countryInfoReducer,
	filters: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
