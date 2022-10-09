// import { countryInfoAction, countryInfoActionTypes } from "./types";
// import { Dispatch } from "react";
// import { TypeThunkArgument } from "../store";

// const fetchInfoCountry =
//   (countyName?: string) =>
//   async (dispatch: Dispatch<countryInfoAction>, _: never, { API }: TypeThunkArgument) => {
//     if (!countyName) {
//       dispatch({ type: countryInfoActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
//     }

//     dispatch({ type: countryInfoActionTypes.SET_LOADING, payload: true });

//     try {
//       const data = await API.getCurrentCountry(countyName);

//       dispatch({ type: countryInfoActionTypes.SET_COUNTRY, payload: data });
//     } catch (error) {
//       dispatch({ type: countryInfoActionTypes.SET_ERROR, payload: "Что-то пошло не так" });
//     }
//   };

// export { fetchInfoCountry };

import React from 'react'