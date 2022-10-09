import axios from "axios";
import { ICountry } from "../store/countries/types";
import { ICountryInfo } from "../store/countryInfo/types";

const BASE_URL = "https://restcountries.com/v3.1";
const ALL_COUNTRIES = BASE_URL + "/all/";
const CURRENT_COUNTRY = BASE_URL + "/name/";

class Api {
  getAllCountries = async () => {
    const { data } = await axios.get<ICountry[]>(ALL_COUNTRIES, {
      params: {
        
      },
    });

    return data;
  };

  getCurrentCountry = async (countyName?: string) => {
    const { data } = await axios.get<ICountryInfo[]>(CURRENT_COUNTRY + countyName, {
      params: {
        fields: "name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
        fullText: "true",
      },
    });

    return data[0];
  };
}

export default new Api();
