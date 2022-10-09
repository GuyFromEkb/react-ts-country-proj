// import { countriesActions, countriesActionTypes, ICountriesState } from "./types";

// const initialState: ICountriesState = {
//   isLoading: true,
//   error: null,
//   countries: [],
// };

// const countriesReducer = (state: ICountriesState = initialState, action: countriesActions): ICountriesState => {
//   switch (action.type) {
//     case countriesActionTypes.SET_COUNTRIES: {
//       return { ...state, isLoading: false, countries: action.payload };
//     }

//     case countriesActionTypes.SET_LOADING: {
//       return { ...state, error: null, isLoading: action.payload };
//     }

//     case countriesActionTypes.SET_ERROR: {
//       return { ...state, isLoading: false, error: action.payload };
//     }

//     default:
//       return state;
//   }
// };

// export default countriesReducer;

import React from 'react'
