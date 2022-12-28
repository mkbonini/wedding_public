/** @format */

import styled from 'styled-components';
import Button from '../../../components/Button';

export default function ConfirmPage({ regressFlow }) {
	const ButtonContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rem;
	`;

	return (
		<>
			<ButtonContainer>
				<Button text='Back' onClick={() => regressFlow()} />
			</ButtonContainer>
		</>
	);
}
