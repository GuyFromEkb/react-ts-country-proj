import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryItemStyled = styled(Link)`
	cursor: pointer;
	transition: background 0.3s;
	border-radius: ${({ theme }) => theme.variables.radius};
	box-shadow: ${({ theme }) => theme.shadow};
	background: ${({ theme }) => theme["ui-base"]};
	overflow: hidden;
`;
const Image = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center center;
	border-top-left-radius: ${({ theme }) => theme.variables.radius};
	border-top-right-radius: ${({ theme }) => theme.variables.radius};
	box-shadow: ${({ theme }) => theme.shadow};
`;

const Description = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Title = styled.div`
	font-weight: ${({ theme }) => theme.variables.bold};
	font-size: ${({ theme }) => theme.variables.md};
`;

const Info = styled.ul`
	display: flex;
	flex-direction: column;
`;

const InfoItem = styled.li`
	padding: 0;
	margin: 0;
	font-size: ${({ theme }) => theme.variables.md};
`;

const InfoItemBold = styled.span`
	font-weight: ${({ theme }) => theme.variables.bold};
	font-size: ${({ theme }) => theme.variables.sm};
`;

interface IProps {
	imgURL: string;
	population: number;
	region: string;
	capital: string[];
	name: string;
}
const CountryItem: FC<IProps> = ({
	capital,
	imgURL,
	population,
	region,
	name,
}) => {
	return (
		<CountryItemStyled to={`country/${name}`}>
			<Image src={imgURL} alt="flag" />
			<Description>
				<Title>{name}</Title>
				<Info>
					<InfoItem>
						<InfoItemBold>Population:</InfoItemBold>{" "}
						{population.toLocaleString()}
					</InfoItem>
					<InfoItem>
						<InfoItemBold>Region:</InfoItemBold> {region}
					</InfoItem>
					{capital.length > 0 && (
						<InfoItem>
							<InfoItemBold>Capital:</InfoItemBold> {capital.join(" ")}
						</InfoItem>
					)}
				</Info>
			</Description>
		</CountryItemStyled>
	);
};

export default CountryItem;
