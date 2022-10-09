import { useFetchAllCountriesQuery } from "../api/countries.api";
import { useAppSelector } from "./redux";

const useGetCountriesWithFilters = () => {
  const { data: countries, isError, isLoading } = useFetchAllCountriesQuery();
  const filters = useAppSelector((state) => state.controls);

  const countriesWithFilters = countries?.filter((country) => {
    if (filters.search) {
      const match = country.name.common.toLowerCase().includes(filters.search.toLowerCase());

      if (!match) return false;
    }

    if (filters.region.length > 0) {
      const regionFilter = filters.region.map((regionName) => regionName.label);

      return regionFilter.includes(country.region);
    }

    return true;
  });

  return { countriesWithFilters, isError, isLoading };
};

export { useGetCountriesWithFilters };
