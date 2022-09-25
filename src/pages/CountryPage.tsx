import { FC } from "react";
import { Link, useParams } from "react-router-dom";

const CountryPage:FC = () => {
	const params = useParams<{ countryName: string }>();

	return (
		<>
			<Link to="/"> BACK</Link>
			<div>COUNTRY : {params.countryName}</div>
		</>
	);
};

export default CountryPage;
