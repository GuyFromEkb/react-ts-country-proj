import { TypeGetState, TypeThunkArgument } from "../store";
import {
	ActionType,
	ICountry,
	actionTypes,
} from "./../countries/countriesReducer";
import { Dispatch } from "react";

const fetchCountries =
	() => async (dispatch: Dispatch<ActionType>, _:never, {client}:TypeThunkArgument) => {
		try {
			const { data } = await client.get<ICountry[]>(
				"https://restcountries.com/v3.1/all",
				{
					params: {
						fields: "name,capital,region,population,flags",
					},
				}
			);

			dispatch({ type: actionTypes.SET_COUNTRIES, payload: data });
		} catch (error) {
			dispatch({ type: actionTypes.SET_ERROR, payload: "Что-то пошло не так" });
		}
	};

export { fetchCountries };
