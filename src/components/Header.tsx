import { FC } from "react";
import styled from "styled-components";
import Container from "./Container";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { toggleTheme } from "../store/themeBody/themeBodySlice";

const HeaderStyled = styled.header`
  padding: 32px 0;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const LinkLogo = styled(Link)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.variables.lg};
  font-weight: ${({ theme }) => theme.variables.bold};
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 564px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Header: FC = () => {
  const currentTheme = useAppSelector((state) => state.themeBody.themeName);
  const dispatch = useAppDispatch();

  const onToggletheme = () => {
    dispatch(toggleTheme(currentTheme));
  };

  return (
    <HeaderStyled>
      <Container>
        <Wraper>
          <LinkLogo to="/">Where is the world?</LinkLogo>
          <ThemeSwitcher onClick={onToggletheme}>
            {currentTheme === "light" ? <IoMoon size={20} /> : <IoMoonOutline size={20} />}
            {currentTheme === "light" ? "Light Mode" : "Dark Mode"}
          </ThemeSwitcher>
        </Wraper>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
