import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import useTypeSelector from "../hooks/useTypeSelector";
import { CountriesCodesWithName } from "../store/countries/countriesSelectors";

const CountryPage:FC = () => {
	const params = useParams<{ countryName: string }>();

	const a = useTypeSelector(CountriesCodesWithName)

	console.log(a);
	
	return (
		<>
			<Link to="/"> BACK</Link>
			<div>COUNTRY : {params.countryName}</div>
			<div>CODE : {a.get("NAM")}</div>
		</>
	);
};

export default CountryPage;
