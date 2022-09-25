import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import useTypeSelector from "../hooks/useTypeSelector";
import { allFilterCountries } from "../store/countries/countriesSelectors";
import CountryItem from "./CountryItem";

const CountryListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 25px;
`;

const CountryList:FC = () => {
	const SHOW_ELEMENTS_IN_LIST = 20;
	const [showInList, setShowInList] = useState(SHOW_ELEMENTS_IN_LIST);

	const filterRegion = useTypeSelector((state) => state.filters.region);
	const filterSearch = useTypeSelector((state) => state.filters.search);

	const handleScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const currentScroll = window.pageYOffset;
		const viewPort = document.documentElement.clientHeight;

		if (scrollHeight <= currentScroll + viewPort + 100) {
			setShowInList((prevState) => prevState + SHOW_ELEMENTS_IN_LIST);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setShowInList(SHOW_ELEMENTS_IN_LIST);
	}, [filterRegion, filterSearch]);

	const countriesWithFilters = useTypeSelector((state) =>
		allFilterCountries(state, filterSearch, filterRegion)
	).slice(0, showInList);

	return (
		<CountryListStyled>
			{countriesWithFilters.map((item) => (
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
