import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useTypeSelector from "../hooks/useTypeSelector";
import GlobalStyled from "../styles/global";
import Container from "./Container";
import Header from "./Header";

const Layout:FC = () => {
	const themFromState = useTypeSelector((state) => state.themeBody.themeStyled);
	return (
		<ThemeProvider theme={themFromState}>
			<GlobalStyled />
			<Header />
			<main>
				<Container>
					<Outlet />
				</Container>
			</main>
		</ThemeProvider>
	);
};

export default Layout;
