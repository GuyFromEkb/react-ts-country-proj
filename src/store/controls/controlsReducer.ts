import { IState, controlsActions, controlsActionTypes } from "./types";

const initialState: IState = {
  search: "",
  region: [],
};

const filterReducer = (state = initialState, action: controlsActions): IState => {
  switch (action.type) {
    case controlsActionTypes.SET_SEARCH:
      return { ...state, search: action.payload };
    case controlsActionTypes.SET_REGION:
      return { ...state, region: action.payload };
    case controlsActionTypes.CLEAR_REGION:
      return { ...state, region: [] };
    default:
      return state;
  }
};

export default filterReducer;
