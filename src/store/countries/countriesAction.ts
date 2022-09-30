import { TypeThunkArgument } from "../store";
import { Dispatch } from "react";
import { countriesActions, countriesActionTypes, ICountry } from "./types";

const fetchCountries =
  () =>
  async (dispatch: Dispatch<countriesActions>, _: never, { client }: TypeThunkArgument) => {
    dispatch({ type: countriesActionTypes.SET_LOADING, payload: true });

    try {
      const { data } = await client.get<ICountry[]>("https://restcountries.com/v3.1/all", {
        params: {
          fields: "name,capital,region,population,flags,cca3",
        },
      });

      dispatch({ type: countriesActionTypes.SET_COUNTRIES, payload: data });
    } catch (error) {
      dispatch({ type: countriesActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
    }
  };

export { fetchCountries };
