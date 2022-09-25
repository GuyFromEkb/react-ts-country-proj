import { useState, useEffect } from "react";
import styled from "styled-components";
import useTypeSelector from "../hooks/useTypeSelector";
import { allFilterCountries } from "../store/countries/countriesSelectors";
import CountryItem from "./CountryItem";

const CountryListStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 25px;
`;

const CountryList = () => {
	const [showInList, setShowInList] = useState(20);

	const filterRegion = useTypeSelector((state) => state.filters.region);
	const filterSearch = useTypeSelector((state) => state.filters.search);

	const handleScroll = (
		setStateShowLost: React.Dispatch<React.SetStateAction<number>>
	) => {
		const scrollHeight = document.documentElement.scrollHeight;
		const currentScroll = window.pageYOffset;
		const viewPort = document.documentElement.clientHeight;

		if (scrollHeight <= currentScroll + viewPort + 100) {
			setStateShowLost((prev) => prev + 20);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll.bind(null, setShowInList));
	}, []);

	useEffect(() => {
		setShowInList(20);
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
