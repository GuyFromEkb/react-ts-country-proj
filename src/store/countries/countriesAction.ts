import { TypeThunkArgument } from "../store";
import { Dispatch } from "react";
import { countriesActions, countriesActionTypes } from "./types";

const fetchCountries =
  () =>
  async (dispatch: Dispatch<countriesActions>, _: never, { API }: TypeThunkArgument) => {
    dispatch({ type: countriesActionTypes.SET_LOADING, payload: true });

    try {
      const data = await API.getAllCountries();

      dispatch({ type: countriesActionTypes.SET_COUNTRIES, payload: data });
    } catch (error) {
      dispatch({ type: countriesActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
    }
  };

export { fetchCountries };
