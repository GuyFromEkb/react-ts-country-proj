import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BiLeftArrow } from "react-icons/bi";
import Preloader from "../components/Preloader";
import CountryPageContent from "../components/CountryPageContent";
import { useFetchCountryByNameQuery } from "../api/countries.api";

const CountryPageStyled = styled.div`
  padding-top: 60px;
  position: relative;
`;

const BtnBack = styled.div`
  background: ${({ theme }) => theme["ui-base"]};
  border-radius: ${({ theme }) => theme.variables.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0s ease-in-out, background 0.3s ease;
  svg {
    transition: transform 0.2s;
  }
  &:hover {
    transform: scale(1.04);
    svg {
      transform: translateX(-5px);
    }
  }
  &:active {
    opacity: 0.8;
  }
`;

const CountryPage: FC = () => {
  const navigate = useNavigate();
  const { countryName } = useParams<{ countryName: string }>();
  const { data: countryInfo, isLoading, isError, isFetching } = useFetchCountryByNameQuery(countryName!);

  const onBack = () => {
    navigate(-1);
  };

  const printLoading = isLoading || isFetching;
  const printError = isError;
  const printContent = countryInfo && !printLoading && !isError;

  return (
    <CountryPageStyled>
      <BtnBack onClick={onBack}>
        <BiLeftArrow /> Back
      </BtnBack>

      {printLoading && <Preloader />}
      {printError && <h1>{"Что то пошло не так..."}</h1>}
      {printContent && <CountryPageContent {...countryInfo} />}
    </CountryPageStyled>
  );
};

export default CountryPage;
