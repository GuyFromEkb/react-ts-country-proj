import { combineReducers } from "redux";
import themBodyReducer from "./themeBody/themBodyReducer";

export const rootReducer = combineReducers({
	themeBody: themBodyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
