import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// import useTypeSelector from "../hooks/useTypeSelector";
// import { fetchInfoCountry } from "../store/countryInfo/countryInfoActions";
import { BiLeftArrow } from "react-icons/bi";
import Preloader from "../components/Preloader";
import CountryPageContent from "../components/CountryPageContent";

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
  const { countryName } = useParams<{ countryName: string }>();
  const navigate = useNavigate();

  const dispatch = useDispatch<any>();

  // const { countryInfo, error, isLoading } = useTypeSelector((state) => state.country);

  useEffect(() => {
    // dispatch(fetchInfoCountry(countryName));
  }, [dispatch, countryName]);

  const onBack = () => {
    navigate(-1);
  };

  // const printLoading = isLoading;
  // const printError = error;
  // const printContent = countryInfo && !isLoading && !error;

  return (
    <CountryPageStyled>
      <BtnBack onClick={onBack}>
        <BiLeftArrow /> Back
      </BtnBack>

      {/* {printLoading && <Preloader />}
      {printError && <h1>{error}</h1>}
      {printContent && <CountryPageContent {...countryInfo} />} */}
    </CountryPageStyled>
  );
};

export default CountryPage;
