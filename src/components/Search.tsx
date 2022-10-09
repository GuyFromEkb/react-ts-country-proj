import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setSearchControls } from "../store/controls/controlsActions";

const SearchIcon = styled(BsSearch)`
	font-size: 20px;
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	color: ${({ theme }) => theme.text};
	transition: all 0.3s;
`;

const InputWraper = styled.label`
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
	background: ${({ theme }) => theme["ui-base"]};
	box-shadow: ${({ theme }) => theme.shadow};
	color: ${({ theme }) => theme.text};
`;

const SearchInput: FC = () => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	// useEffect(() => {
	// 	dispatch(setSearchControls(value));
	// }, [dispatch, value]);

	return (
		<InputWraper>
			<SearchIcon />
			<Input
				value={value}
				onChange={onSearch}
				placeholder="Search for a country"
				type="text"
			/>
		</InputWraper>
	);
};

export default SearchInput;
