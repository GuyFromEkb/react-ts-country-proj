import { FC, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
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
			<Routes>
				<Route
					element={
						<main>
							<Container>
								<Controls />
								<CountryList />
							</Container>
						</main>
					}
					path="/"
				/>
				<Route
					element={
						<div style={{ height: "2000px" }}>
							<h1>ELEMENT</h1>
						</div>
					}
					path="/h1"
				/>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
