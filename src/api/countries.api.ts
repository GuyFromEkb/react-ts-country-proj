import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../store/countries/types";

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
  }),
});

export const { useFetchAllCountriesQuery } = countriesApi;
export { countriesApi };
