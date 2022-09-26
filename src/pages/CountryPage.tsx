import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useTypeSelector from "../hooks/useTypeSelector";
import { countriesCodesWithName } from "../store/countries/countriesSelectors";
import { fetchInfoCountry } from "../store/countryInfo/countryInfoActions";

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
      <Link to="/"> BACK</Link>
      {countryInfo.length > 0 &&
        countryInfo.map(
          ({ borders, capital, currencies, languages, name, population, region, subregion, tld, flags }) => {
            const printNativeName = Object.values(name.nativeName)[0].common;
            const printCurrencies = Object.values(currencies).map((item) => `${item.name} ${item.symbol}`);
            const printLanguages = Object.values(languages);

            return (
              <React.Fragment key={name.common}>
                <img src={flags.svg} alt="" />
                <div>Country : {name.common}</div>
                <div>COUNTRY NATIVE NAME : {printNativeName}</div>
                <div>Population : {population.toLocaleString()}</div>
                <div>Region : {region}</div>
                <div>Sub Region : {subregion}</div>
                <div>Capital : {capital.join(" ")}</div>
                <div>Currencies : {printCurrencies.join(" ")}</div>
                <div>Borders : {borders.map((border) => `${countriesCodes.get(border)} `)}</div>
                <div>Top Level Domain: : {tld.join(" ")}</div>
                <div>Languages : {printLanguages.join(" ")}</div>
              </React.Fragment>
            );
          }
        )}
    </>
  );
};

export default CountryPage;
