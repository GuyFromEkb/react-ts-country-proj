import { RootState } from "./../rootReducer";

const allCountries = (state: RootState) => state.countries.countries;

const allRegionCountries = (state: RootState) => {
	const setReions = new Set<string>();
	state.countries.countries.forEach((counties) => {
		setReions.add(counties.region);
	});

	return Array.from(setReions);
};

const allFilterCountries = (
	state: RootState,
	searchFilter: string,
	regionFilter: string[]
) => {
	const countries = state.countries.countries;

	return countries.filter((c) => {
		let search = true;

		if (searchFilter.length > 0) {
			search = c.name.common.toLowerCase().includes(searchFilter.toLowerCase());
		}

		if (!search) {
			return false;
		}

		if (regionFilter.length > 0) {
			return regionFilter.includes(c.region);
		}

		return true;
	});
};

export { allCountries, allRegionCountries, allFilterCountries };
