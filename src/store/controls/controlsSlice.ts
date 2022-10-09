import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOption } from "../../components/Selector";

export interface IControlsState {
  search: string;
  region: IOption[];
}

const initialState: IControlsState = {
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
    setRegionControls: (state, action: PayloadAction<IOption[]>) => {
      state.region = action.payload;
    },
  },
});
export const { setRegionControls, setSearchControls } = controlsSlice.actions;
export default controlsSlice;
