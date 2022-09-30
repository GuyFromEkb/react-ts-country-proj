import { IState, countryInfoAction, countryInfoActionTypes } from "./types";

const initialState: IState = {
  isLoading: false,
  error: null,
  countryInfo: null,
};

const countryInfoReducer = (state = initialState, action: countryInfoAction): IState => {
  switch (action.type) {
    case countryInfoActionTypes.SET_COUNTRY: {
      return { ...state, isLoading: false, countryInfo: action.payload };
    }
    case countryInfoActionTypes.SET_LOADING: {
      return { ...state, error: null, isLoading: action.payload };
    }
    case countryInfoActionTypes.SET_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default countryInfoReducer;
