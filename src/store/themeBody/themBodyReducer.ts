import { ActionType, themeActionTypes } from "./types";

const initialState = "light";

const themBodyReducer = (state = initialState, action: ActionType): string => {
	switch (action.type) {
		case themeActionTypes.SET_THEME:
			return action.payload;

		case themeActionTypes.TOGGLE_THEME:
			return state === "light" ? "dark" : "light";

		default:
			return state;
	}
};

export default themBodyReducer;
