import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { useFetchAllCountriesQuery } from "../api/countries.api";
import useEventListener from "../hooks/useEventListener";
import CountryItem from "./CountryItem";
import Preloader from "./Preloader";

const CountryListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  position: relative;
`;
const SHOW_ELEMENTS_IN_LIST = 20;

const CountryList: FC = () => {
  const [showInList, setShowInList] = useState(SHOW_ELEMENTS_IN_LIST);

  const { data, isError, isLoading } = useFetchAllCountriesQuery();
  const countries = data?.slice(0, showInList);

  // const filterRegion = useTypeSelector((state) => state.filters.region);
  // const filterSearch = useTypeSelector((state) => state.filters.search);

  // const countriesWithFilters = useTypeSelector((state) => allFilterCountries(state, filterSearch, filterRegion)).slice(
  //   0,
  //   showInList
  // );

  // useEffect(() => {
  //   setShowInList(SHOW_ELEMENTS_IN_LIST);
  // }, [filterRegion, filterSearch]);

  const handleScroll = () => {
    const pageHeight = document.documentElement.scrollHeight;
    const currentScroll = document.documentElement.scrollTop;
    const viewPort = document.documentElement.clientHeight;

    if (pageHeight <= currentScroll + viewPort + 300) {
      setShowInList((prevState) => prevState + SHOW_ELEMENTS_IN_LIST);
    }
  };

  useEventListener("scroll", handleScroll);

  const printLoading = isLoading;
  const printError = isError;
  const printContent = data && !isLoading && !isError;

  return (
    <CountryListStyled>
      {printLoading && <Preloader />}
      {printError && <h1>{"Что то пошло не так"}</h1>}

      {printContent &&
        countries?.map((item) => (
          <CountryItem
            key={item.name.common + item.population}
            imgURL={item.flags.png}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))}
    </CountryListStyled>
  );
};

export default CountryList;
