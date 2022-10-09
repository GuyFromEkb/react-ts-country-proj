import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFetchAllCountriesQuery } from "../api/countries.api";
import { ICountryInfo } from "../interfaces";

const CountryPageContainer = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: minmax(370px, 1fr) minmax(300px, 1fr);
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FlagImg = styled.img`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow};
  object-fit: cover;
  object-position: center center;
  height: auto;
  border-radius: ${({ theme }) => theme.variables.radius};
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.variables.lg};
  font-weight: ${({ theme }) => theme.variables.bold};
  margin-bottom: 20px;
  line-height: 20px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  white-space: nowrap;
`;
const Bold = styled.span`
  font-weight: ${({ theme }) => theme.variables.bold};
`;
const BorderWrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 15px;
`;

const BorderItem = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${({ theme }) => theme["ui-base"]};
  border-radius: ${({ theme }) => theme.variables.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.1s ease-in-out, background 0.3s ease;
  &:hover {
    transform: scale(1.04);
  }
`;
interface IProps extends ICountryInfo {}

const CountryPageContent: FC<IProps> = ({
  borders,
  capital,
  currencies,
  languages,
  name,
  population,
  region,
  subregion,
  tld,
  flags,
}) => {
  const printNativeName = Object.values(name.nativeName)[0].common;
  const printCurrencies = Object.values(currencies).map((item) => `${item.name} [ ${item.symbol} ]`);
  const printLanguages = Object.values(languages);

  const { data: countries } = useFetchAllCountriesQuery();
  const countriesCode = new Map<string, string>();
  countries?.forEach((coutry) => countriesCode.set(coutry.cca3, coutry.name.common));

  return (
    <CountryPageContainer key={name.common}>
      <FlagImg src={flags.svg} alt={name.common} />
      <div>
        <Title>{name.common} </Title>
        <Wrap>
          <List>
            <ListItem>
              <Bold>Native Name:</Bold> {printNativeName}
            </ListItem>
            <ListItem>
              <Bold>Population:</Bold> {population.toLocaleString()}
            </ListItem>
            <ListItem>
              <Bold>Native Name:</Bold> {printNativeName}
            </ListItem>
            <ListItem>
              <Bold>Region:</Bold> {region}
            </ListItem>
            <ListItem>
              <Bold>Sub Region:</Bold> {subregion}
            </ListItem>
            <ListItem>
              <Bold>Capiital</Bold> {capital.join(" ")}
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Bold>Top Level Domain: </Bold> {tld.join(" ")}
            </ListItem>
            <ListItem>
              <Bold>Currency</Bold> {printCurrencies.join(" ")}
            </ListItem>
            <ListItem>
              <Bold>Languages:</Bold> {printLanguages.join(" ")}
            </ListItem>
          </List>
        </Wrap>

        <BorderWrap>
          <Bold>Borders:</Bold>

          {borders.length > 0
            ? borders.map((border) => {
                const countryName = countriesCode.get(border);
                return (
                  <BorderItem key={border} to={`../country/${countryName}`}>
                    {countryName}
                  </BorderItem>
                );
              })
            : "There is no border country"}
        </BorderWrap>
      </div>
    </CountryPageContainer>
  );
};

export default CountryPageContent;
