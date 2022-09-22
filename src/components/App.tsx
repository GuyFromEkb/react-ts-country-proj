import { FC, useEffect } from "react";
import GlobalStyled from "../styles/global";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import { baseTheme, lightTheme, darkTheme } from "../styles/theme";
import useTypeSelector from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../store/countries/countriesAction";
import SearchInput from "./Search";

const App: FC = () => {
	const themFromState = useTypeSelector((state) => state.themeBody);
	const themeBody = themFromState === "light" ? lightTheme : darkTheme;
	const dispatch = useDispatch<any>();

	const countriesArr = useTypeSelector((state) => state.countries.countries);

	useEffect(() => {
		dispatch(fetchCountries());
		// eslint-disable-next-line
	}, []);

	return (
		<ThemeProvider theme={{ ...baseTheme, ...themeBody }}>
			<GlobalStyled />
			<Header />
			<SearchInput />
			<main>
				{countriesArr.map((item, idx) => (
					<div key={item.name.common + idx} style={{ margin: "20px 0" }}>
						<h4>{item.name.common}</h4>
						<img src={item.flags.png} alt={item.name.common} />
					</div>

					// <div>{item.name.common}</div>
				))}
			</main>
		</ThemeProvider>
	);
};

export default App;
