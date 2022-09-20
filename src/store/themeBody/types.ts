export enum themeActionTypes {
	SET_THEME = "SET_THEME",
	TOGGLE_THEME = "TOGGLE_THEME",
}
interface actionTypeSetTheme {
	type: themeActionTypes.SET_THEME;
	payload: string;
}
interface actionTypeToggleTheme {
	type: themeActionTypes.TOGGLE_THEME;
}

export type ActionType = actionTypeSetTheme | actionTypeToggleTheme;
