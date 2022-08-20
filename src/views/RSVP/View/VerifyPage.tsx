/** @format */
import { useState } from 'react';
import {
	Input,
	FlatButtonContainer,
	ParagraphText,
} from '../styled-components';

export default function VerifyPage({
	regressFlow,
	progressFlow,
	setSelectedGuest,
	selectedGuest,
}) {
	const [error, setError] = useState(false);
	const [code, setCode] = useState('1234');

	function handleBackButton() {
		setSelectedGuest(null);
		regressFlow();
	}

	function verifyGuest() {
		if (code === '1234') {
			setError(false);
			progressFlow();
		} else {
			setError(true);
		}
	}

	return (
		<>
			<ParagraphText>
				{selectedGuest.first_name}, you can find your verification code on your
				invite
			</ParagraphText>
			{error && <p style={{ color: 'red' }}>Error: Code is invalid</p>}
			<Input
				type='text'
				placeholder='Verification Code'
				onChange={(e) => setCode(e.target.value)}
			/>
			<FlatButtonContainer>
				<button className='verify-button-submit' onClick={(e) => verifyGuest()}>
					submit
				</button>
				<button
					className='verify-button-back'
					onClick={() => handleBackButton()}
				>
					back
				</button>
			</FlatButtonContainer>
		</>
	);
}
