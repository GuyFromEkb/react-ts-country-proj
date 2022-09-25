export enum themeActionTypes {
	TOGGLE_THEME = "TOGGLE_THEME",
}

interface actionTypeToggleTheme {
	type: themeActionTypes.TOGGLE_THEME;
}

export type ActionType = actionTypeToggleTheme;
