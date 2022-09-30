export enum controlsActionTypes {
  SET_SEARCH = "@@controls/SET_SEARCH",
  SET_REGION = "@@controls/SET_REGION",
  CLEAR_REGION = "@@controls/CLEAR_REGION",
}

export interface IState {
  search: string;
  region: string[];
}

export interface IActionSetSearch {
  type: controlsActionTypes.SET_SEARCH;
  payload: string;
}

export interface IActionSetRegion {
  type: controlsActionTypes.SET_REGION;
  payload: string[];
}

export interface IActionClearRegion {
  type: controlsActionTypes.CLEAR_REGION;
}
export type controlsActions = IActionSetSearch | IActionSetRegion | IActionClearRegion;
