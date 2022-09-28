import axios from "axios";
import { countryInfoAction, countryInfoActionTypes, ICountryInfo } from "./types";
import { Dispatch } from "react";

const fetchInfoCountry = (countyName: string | undefined) => async (dispatch: Dispatch<countryInfoAction>) => {
  if (!countyName) {
    dispatch({ type: countryInfoActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
  }

  try {
    dispatch({ type: countryInfoActionTypes.SET_LOADING_COUNTRY_INFO, payload: true });
    const { data } = await axios.get<ICountryInfo[]>(
      `https://restcountries.com/v3.1/name/${countyName}?fullText=true`,
      {
        params: {
          fields: "name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
        },
      }
    );

    dispatch({ type: countryInfoActionTypes.SET_COUNTRY, payload: data });
  } catch (error) {
    dispatch({ type: countryInfoActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
  }
};

export { fetchInfoCountry };
