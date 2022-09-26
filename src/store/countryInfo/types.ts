export enum countryInfoActionTypes {
	SET_COUNTRY = "SET_COUNTRY",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

interface IActionSetCountry {
	type: countryInfoActionTypes.SET_COUNTRY;
	payload: ICountryInfo[];
}

interface IActionSetLoading {
	type: countryInfoActionTypes.SET_LOADING;
	payload: boolean;
}

interface IActionSetError {
	type: countryInfoActionTypes.SET_ERROR;
	payload: null | string;
}

export type countryInfoAction = IActionSetCountry | IActionSetLoading | IActionSetError;

export interface ICountryInfo {
	name: {
		common: string;
		nativeName: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	flags: {
		svg: string;
	};
	population: number;
	region: string;
	subregion: string;
	capital: string[];
	tld: string[];
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	languages: {
		[key: string]: string;
	};
	borders: string[];
}

export interface IState {
	isLoading: boolean;
	error: null | string;
	countryInfo: ICountryInfo[];
}