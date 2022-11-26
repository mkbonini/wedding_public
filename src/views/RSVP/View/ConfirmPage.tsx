/** @format */
import { useState } from 'react';
import styled from 'styled-components';

import Stepper from '../../../components/Stepper';

export default function ConfirmPage({
	regressFlow,
	selectedGuest,
	progressFlow,
}) {
	const ButtonContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	`;

	const Button = styled.button`
		height: 50px;
		width: 200px;

		&.main {
			background-color: #000000;
			color: #ffffff;
		}
		&.secondary {
			color: #000000;
			background-color: #ffffff;
			border: 1px solid #000000;
		}
	`;

	return (
		<>
			<Stepper step={5} />
			<ButtonContainer>
				<Button onClick={() => regressFlow()}>BACK</Button>
			</ButtonContainer>
		</>
	);
}
