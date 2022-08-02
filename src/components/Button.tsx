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
	border-radius: 8px;
`;

export default function Button({ text }) {
	return <PrimaryButton>{text}</PrimaryButton>;
}
