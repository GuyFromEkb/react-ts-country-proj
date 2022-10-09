import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { darkThemeState, lightThemeState, TypeTheme } from "../../styles/theme";
import getUserTheme, { LS_KEY, LS_FIELD } from "../../utils/getUserTheme";

interface IInitialState {
  themeName: string;
  themeStyled: TypeTheme;
}

const initialState: IInitialState = getUserTheme();

const themeBodySlice = createSlice({
  name: "@@themeBody",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<string>) => {
      const isLightTheme = action.payload === "light";

      const lsObj = JSON.stringify({
        [LS_FIELD]: isLightTheme ? "dark" : "light",
      });

      localStorage.setItem(LS_KEY, lsObj);

      return isLightTheme ? darkThemeState : lightThemeState;
    },
  },
});

export default themeBodySlice;
export const { toggleTheme } = themeBodySlice.actions;
