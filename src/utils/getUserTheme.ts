import getDataFromLS from "./getDataFromLocalStorage";
import { baseTheme, lightTheme, darkTheme } from "../styles/theme";

const light = {
	themeBody: {
		themeName: "light",
		themeStyled: { ...baseTheme, ...lightTheme },
	},
};
const dark = {
	themeBody: { themeName: "dark", themeStyled: { ...baseTheme, ...darkTheme } },
};

/**
 * Возвращает тему, либо из LocalStorage, либо предпочтительную, на устройстве...если  ничего этого нет, тогда белую...
 *
 * @return {returnFuncType} themeBody: { themeName: "dark", themeStyled: { ...baseTheme, ...darkTheme } } или  themeBody: { themeName: "light", themeStyled: { ...baseTheme, ...lightTheme } }
 */
const getUserTheme = () => {
	const themeFromLS = getDataFromLS("reduxStore");

	if (themeFromLS && themeFromLS["themeName"]) {
		return themeFromLS["themeName"] === "light" ? light : dark;
	}

	const isDarkOnDevice = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	return isDarkOnDevice ? dark : light;
};

export default getUserTheme;
