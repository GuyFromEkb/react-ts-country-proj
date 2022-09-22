import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchIcon = styled(BsSearch)`
	font-size: 20px;
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	color: ${({ theme }) => theme.text};
	transition: all 0.3s;
`;

const InputContainer = styled.label`
	display: inline-flex;
	align-items: center;
	background: none;
	height: 50px;
	position: relative;
`;

const Input = styled.input`
	transition: all 0.3s;
	height: 100%;
	width: 250px;
	padding: 0;
	padding: 0 20px 0 40px;
	border: none;
	outline: none;
	border-radius: ${({ theme }) => theme.variables.radius};
	background: ${({ theme }) => theme.bg};
	box-shadow: ${({ theme }) => theme.shadow};
	color: ${({ theme }) => theme.text};
`;

const SearchInput = () => {
	return (
		<InputContainer>
			<SearchIcon />
			<Input placeholder="Search for a country" type="text" />
		</InputContainer>
	);
};

export default SearchInput;

// export function getTransition(
// 	duration: number = 0.3,
// 	property: string[] | string = ["background-color", "color"],
// 	animation = "ease"
// ) {
// 	return css`
// 		transition-property: ${Array.isArray(property)
// 			? property.join(", ")
// 			: property};
// 		transition-duration: ${duration}s;
// 		transition-timing-function: ${animation};
// 	`;
// }
