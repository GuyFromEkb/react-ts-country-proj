import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useTypeSelector from "../hooks/useTypeSelector";
import { countriesCodesWithName } from "../store/countries/countriesSelectors";
import { fetchInfoCountry } from "../store/countryInfo/countryInfoActions";

const CountryPageStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(400px, 600px) 1fr;
  gap: 5rem;
`;
const FlagImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  height: auto;
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.variables.lg};
  font-weight: ${({ theme }) => theme.variables.bold};
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
const Bold = styled.span`
  font-weight: ${({ theme }) => theme.variables.bold};
`;
const BorderWrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
const BorderItemsWrap = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
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
const CountryPage: FC = () => {
  const { countryName } = useParams<{ countryName: string }>();

  const dispatch = useDispatch<any>();
  const countriesCodes = useTypeSelector(countriesCodesWithName);
  const { countryInfo, error, isLoading } = useTypeSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchInfoCountry(countryName));
  }, [dispatch, countryName]);

  console.log("countryInfo", countryInfo);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      {countryInfo.length > 0 &&
        countryInfo.map(
          ({ borders, capital, currencies, languages, name, population, region, subregion, tld, flags }) => {
            const printNativeName = Object.values(name.nativeName)[0].common;
            const printCurrencies = Object.values(currencies).map((item) => `${item.name} [${item.symbol}]`);
            const printLanguages = Object.values(languages);

            return (
              <CountryPageStyled key={name.common}>
                <FlagImg src={flags.svg} alt={name.common} />
                <div>
                  <Title>{name.common} </Title>
                  <Wrap>
                    <List>
                      <ListItem> <Bold>Native Name:</Bold> {printNativeName} </ListItem>
                      <ListItem> <Bold>Population:</Bold> {population.toLocaleString()} </ListItem>
                      <ListItem> <Bold>Native Name:</Bold> {printNativeName} </ListItem>
                      <ListItem> <Bold>Region:</Bold> {region} </ListItem>
                      <ListItem> <Bold>Sub Region:</Bold> {subregion} </ListItem>
                      <ListItem> <Bold>Capiital</Bold> {capital.join(" ")} </ListItem>
                    </List>

                    <List>
                      <ListItem> <Bold>Top Level Domain: </Bold> {tld.join(" ")} </ListItem>
                      <ListItem> <Bold>Currency</Bold> {printCurrencies.join(" ")} </ListItem>
                      <ListItem> <Bold>Languages:</Bold> {printLanguages.join(" ")} </ListItem>
                    </List>                    
                  </Wrap>

                  <BorderWrap>
                    <Bold>Borders:</Bold>
                    <BorderItemsWrap>
                      {borders.length > 0
                        ? borders.map((border) => {
                          const countryName = countriesCodes.get(border)
                          return (
                          <BorderItem to={`../country/${countryName}`}>
                            {countryName}
                          </BorderItem>)
                        })
                        : "There is no border country"}
                    </BorderItemsWrap>
                  </BorderWrap>
                </div>
              </CountryPageStyled>
            );
          }
        )}
    </>
  );
};

export default CountryPage;
