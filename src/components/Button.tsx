/** @format */

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
	position: relative;
	top: 0;
	transition: top ease 0.5s;
	&:hover {
		cursor: pointer;
		top: -5px;
	}
`;

export default function Button({ text, location }) {
	const history = useHistory();

	return (
		<PrimaryButton onClick={() => history.push(location)}>{text}</PrimaryButton>
	);
}
