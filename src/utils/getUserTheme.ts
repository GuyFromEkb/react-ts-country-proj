import getDataFromLS from "./getDataFromLocalStorage";

type returnFuncType = { themeBody: "dark" } | { themeBody: "light" };
/**
 * Возвращает тему, либо из LocalStorage, либо предпочтительную, на устройстве...если  ничего этого нет, тогда белую...
 *
 * @return {returnFuncType} { themeBody: "dark" } или  { themeBody: "light" }
 */
const getUserTheme = (): returnFuncType => {
	const themeFromLS = getDataFromLS("reduxStore");

	if (themeFromLS && themeFromLS["themeBody"]) {
		return { themeBody: themeFromLS["themeBody"] };
	}

	const isDarkOnDevice = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	return isDarkOnDevice ? { themeBody: "dark" } : { themeBody: "light" };
};

export default getUserTheme;
