/** @format */

import styled from 'styled-components';

const PrimaryButton = styled.div`
	width: 200px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000000;
	color: #ffffff;
	margin: 2rem 0rem;
	border-radius: 2px;
	position: relative;
	top: 0;
	transition: top ease 0.5s;
	font-size: 14px;
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		top: -5px;
	}

	@media only screen and (max-width: 900px) {
		width: 150px;
		height: 50px;
		font-size: 14px;
	}
`;

export default function Button({ text, onClick }) {
	return <PrimaryButton onClick={() => onClick()}>{text}</PrimaryButton>;
}
