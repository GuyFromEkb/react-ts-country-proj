import { FC, useEffect } from "react";
import styled from "styled-components";
import Container from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import useTypeSelector from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeBody/themBodyActions";

const HeaderStyled = styled.header`
	padding: 32px 0;
	box-shadow: ${({ theme }) => theme.shadow};
`;

const H1 = styled.h1`
	cursor: pointer;
	font-size: ${({ theme }) => theme.variables.lg};
	font-weight: ${({ theme }) => theme.variables.bold};
`;

const ThemeSwitcher = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
`;

const Wraper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Header: FC = () => {
	const currentTheme = useTypeSelector((state) => state.themeBody);
	const dispatch = useDispatch();

	useEffect(() => {
		localStorage.setItem(
			"reduxStore",
			JSON.stringify({ themeBody: currentTheme })
		);
	}, [currentTheme]);

	return (
		<HeaderStyled>
			<Container>
				<Wraper>
					<H1>Where is the world?</H1>
					<ThemeSwitcher onClick={() => dispatch(toggleTheme)}>
						{currentTheme === "light" ? (
							<IoMoon size={20} />
						) : (
							<IoMoonOutline size={20} />
						)}
						{currentTheme === "light" ? "Light Mode" : "Dark Mode"}
					</ThemeSwitcher>
				</Wraper>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
