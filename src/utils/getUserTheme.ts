import { lightThemeState, darkThemeState } from "../styles/theme";
import getDataFromLS from "./getDataFromLocalStorage";

export const LS_KEY = "reduxStore";
export const LS_FIELD = "themeName";
/**
 * Возвращает тему, либо из LocalStorage, либо предпочтительную, на устройстве...если  ничего этого нет, тогда белую...
 *
 * @return {returnFuncType} themeBody: { themeName: "dark", themeStyled: { ...baseTheme, ...darkTheme } } или  themeBody: { themeName: "light", themeStyled: { ...baseTheme, ...lightTheme } }
 */
const getUserTheme = () => {
  const themeFromLS = getDataFromLS(LS_KEY);

  if (themeFromLS[LS_FIELD]) {
    return themeFromLS[LS_FIELD] === "light" ? lightThemeState : darkThemeState;
  }

  const isDarkOnDevice = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return isDarkOnDevice ? darkThemeState : lightThemeState;
};

export default getUserTheme;
