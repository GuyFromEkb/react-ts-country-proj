export enum actionTypes {
  SET_COUNTRIES = "SET_COUNTRIES",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

interface IActionSetCounties {
  type: actionTypes.SET_COUNTRIES;
  payload: ICountry[];
}
interface IActionSetLoading {
  type: actionTypes.SET_LOADING;
  payload: boolean;
}
interface IActionSetError {
  type: actionTypes.SET_ERROR;
  payload: null | string;
}
export type ActionType = IActionSetCounties | IActionSetLoading | IActionSetError;

export interface ICountry {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
  };
  cca3: string;
}
interface ICountriesState {
  isLoading: boolean;
  error: null | string;
  countries: ICountry[];
}
const initialState: ICountriesState = {
  isLoading: true,
  error: null,
  countries: [],
};

const countriesReducer = (state: ICountriesState = initialState, action: ActionType): ICountriesState => {
  switch (action.type) {
    case actionTypes.SET_COUNTRIES: {
      return { ...state, countries: action.payload };
    }

    case actionTypes.SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    case actionTypes.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

export default countriesReducer;
