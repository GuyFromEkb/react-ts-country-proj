export interface ICountry {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  population: number;
  flags: {
    png: string;
  };
  cca3: string;
}
export interface ICountriesState {
  isLoading: boolean;
  error: null | string;
  countries: ICountry[];
}

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
    countryInfo: ICountryInfo | null;
  }