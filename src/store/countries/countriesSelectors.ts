import { RootState } from "./../rootReducer";

const allRegionCountries = (state: RootState) => {
  const setReions = new Set<string>();

  state.countries.countries.forEach((counties) => {
    setReions.add(counties.region);
  });

  return Array.from(setReions);
};

const countriesCodesWithName = (state: RootState) => {
  const countries = state.countries.countries;

  const mapCountriesCode = new Map<string, string>();
  countries.forEach((c) => mapCountriesCode.set(c.cca3, c.name.common));

  return mapCountriesCode;
};

const allFilterCountries = (state: RootState, searchFilter: string, regionFilter: string[]) => {
  const countries = state.countries.countries;

  return countries.filter((c) => {
    if (searchFilter) {
      const match = c.name.common.toLowerCase().includes(searchFilter.toLowerCase());

      if (!match) return false;
    }

    if (regionFilter.length > 0) {
      return regionFilter.includes(c.region);
    }

    return true;
  });
};

export { allRegionCountries, allFilterCountries, countriesCodesWithName };
