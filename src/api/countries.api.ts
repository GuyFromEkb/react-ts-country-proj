import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry, ICountryInfo } from "../interfaces";


const countriesApi = createApi({
  reducerPath: "@@countriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (build) => ({
    fetchAllCountries: build.query<ICountry[], void>({
      query: () => ({
        url: "all",
        params: {
          fields: "name,capital,region,population,flags,cca3",
        },
      }),
    }),
    fetchCountryByName: build.query<ICountryInfo, string>({
      query: (countyName: string) => ({
        url: "name/" + countyName,
        params: {
          fields: "name,population,region,subregion,capital,tld,currencies,languages,borders,flags",
          fullText: "true",
        },
      }),
      transformResponse: (response: ICountryInfo[]) => response[0],
    }),
  }),
});

export const { useFetchAllCountriesQuery,useFetchCountryByNameQuery } = countriesApi;
export { countriesApi };
