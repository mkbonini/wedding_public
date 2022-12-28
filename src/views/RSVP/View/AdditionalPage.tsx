/** @format */
import { useState, useEffect } from 'react';
import { Heading, ButtonContainer, ErrorMessage } from '../styled-components';
import Button from '../../../components/Button';
import StandardTextField from '../../../components/StandardTextField';
import ButtonSecondary from '../../../components/ButtonSecondary';

import styled from 'styled-components';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
	selectedGuest,
	regressFlow,
}) {
	useEffect(() => {
		findGuest();
	});

	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);

	function editSearchTerm(e) {
		let term = e.target.value.toLowerCase();
		setSearchTerm(term);
	}

	function findGuest() {
		let foundGuest = guestList?.find((guest) =>
			searchTerm.includes(
				guest.first_name.toLowerCase() + ' ' + guest.last_name.toLowerCase()
			)
		);
		setSelectedGuest(foundGuest);
	}

	function handleClick() {
		if (selectedGuest) {
			progressFlow();
			setDisplayError(false);
		} else {
			setDisplayError(true);
		}
	}

	const ButtonContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
		gap: 20px;
	`;

	return (
		<>
			<Heading>ADDITIONAL</Heading>
			<StandardTextField
				label='Search Your Name'
				onChange={(e) => editSearchTerm(e)}
				type='text'
				required={true}
			/>
			<ButtonContainer>
				<ButtonSecondary onClick={() => regressFlow()} text='Back' />
				<Button onClick={() => progressFlow()} text='Submit Your RSVP' />
			</ButtonContainer>
		</>
	);
}
