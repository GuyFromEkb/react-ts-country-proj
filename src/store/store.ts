import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import getUserTheme from "../utils/getUserTheme";
import axios from "axios";

const initialState = { ...getUserTheme() };

const thunkArgument = {
	client: axios,
};

export type TypeThunkArgument = typeof thunkArgument;

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk.withExtraArgument(thunkArgument)))
);

export type TypeGetState = typeof store.getState;

export default store;
