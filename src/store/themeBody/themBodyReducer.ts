import { ActionType, themeActionTypes } from "./types";
import { baseTheme, lightTheme, darkTheme } from "../../styles/theme";

const initialState = {
	themeName: "light",
	themeStyled: { ...baseTheme, ...lightTheme },
};

const themBodyReducer = (
	state = initialState,
	action: ActionType
): typeof initialState => {
	switch (action.type) {
		case themeActionTypes.TOGGLE_THEME:
			return state.themeName === "light"
				? {
						themeName: "dark",
						themeStyled: { ...state.themeStyled, ...darkTheme },
				  }
				: {
						themeName: "light",
						themeStyled: { ...state.themeStyled, ...lightTheme },
				  };

		default:
			return state;
	}
};

export default themBodyReducer;
