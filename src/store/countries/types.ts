export enum countriesActionTypes {
  SET_COUNTRIES = "@@countries/SET_COUNTRIES",
  SET_LOADING = "@@countries/SET_LOADING",
  SET_ERROR = "@@countries/SET_ERROR",
}

interface IActionSetCounties {
  type: countriesActionTypes.SET_COUNTRIES;
  payload: ICountry[];
}

interface IActionSetLoading {
  type: countriesActionTypes.SET_LOADING;
  payload: boolean;
}

interface IActionSetError {
  type: countriesActionTypes.SET_ERROR;
  payload: null | string;
}

export type countriesActions = IActionSetCounties | IActionSetLoading | IActionSetError;

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
export interface ICountriesState {
  isLoading: boolean;
  error: null | string;
  countries: ICountry[];
}
