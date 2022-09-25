import { FC, useEffect } from "react";
import GlobalStyled from "../styles/global";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import useTypeSelector from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../store/countries/countriesAction";
import Controls from "./Controls";
import CountryList from "./CountryList";
import Container from "./Container";

const App: FC = () => {
	const themFromState = useTypeSelector((state) => state.themeBody.themeStyled);
	const dispatch = useDispatch<any>();

	useEffect(() => {
		dispatch(fetchCountries());
	}, [dispatch]);

	return (
		<ThemeProvider theme={themFromState}>
			<GlobalStyled />
			<Header />
			<main>
				<Container>
					<Controls />
					<CountryList />
				</Container>
			</main>
		</ThemeProvider>
	);
};

export default App;
