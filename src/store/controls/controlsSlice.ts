import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  search: string;
  region: string[];
}

const initialState: IInitialState = {
  search: "",
  region: [],
};

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearchControls: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegionControls: (state, action: PayloadAction<string[]>) => {
      state.region = action.payload;
    },
  },
});
export const { setRegionControls, setSearchControls } = controlsSlice.actions;
export default controlsSlice;
