import { controlsActionTypes } from "./types";

const setRegionControlsOptions = (options: string[]) => ({
  type: controlsActionTypes.SET_REGION,
  payload: options,
});

const setSearchControls = (options: string) => ({
  type: controlsActionTypes.SET_SEARCH,
  payload: options,
});
export { setSearchControls, setRegionControlsOptions };
