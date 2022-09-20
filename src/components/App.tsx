import { FC } from "react";
import GlobalStyled from "../styles/global";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import { baseTheme, lightTheme, darkTheme } from "../styles/theme";
import useTypeSelector from "../hooks/useTypeSelector";

const App: FC = () => {
	const themFromState = useTypeSelector((state) => state.themeBody);
	const themeBody = themFromState === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={{ ...baseTheme, ...themeBody }}>
			<GlobalStyled />
			<Header />
			<main>
				<h1>MAIN</h1>
			</main>
		</ThemeProvider>
	);
};

export default App;
