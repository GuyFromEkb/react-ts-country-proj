export enum themeActionTypes {
	TOGGLE_THEME = "@@themeBody/TOGGLE_THEME",
}

interface actionTypeToggleTheme {
	type: themeActionTypes.TOGGLE_THEME;
}

export type themeActions = actionTypeToggleTheme;
