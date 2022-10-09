import { useFetchAllCountriesQuery } from "../api/countries.api";

const useGetAllCountriesOptions = () => {
  const { data } = useFetchAllCountriesQuery();
  const setRegions = new Set<string>();

  data?.forEach((counties) => {
    setRegions.add(counties.region);
  });

  return [...setRegions].map((regionName) => ({
    label: regionName,
    value: regionName,
  }));
};

export { useGetAllCountriesOptions };
