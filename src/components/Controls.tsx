import styled from "styled-components";
import Search from "./Search";
import { Selector } from "./Selector";

const Wraper = styled.div`
	margin: 50px 0px;
	display: flex;
	gap: 100px;
	justify-content: space-between;

	@media (max-width: 767px) {
		flex-direction: column-reverse;
	}
`;

const Controls = () => {
	return (

			<Wraper>
				<Search />
				<Selector />
			</Wraper>

	);
};

export default Controls;
