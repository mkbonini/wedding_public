/** @format */
import { useState, useEffect } from 'react';
import { Heading, ButtonContainer, ErrorMessage } from '../styled-components';
import Button from '../../../components/Button';
import StandardTextField from '../../../components/StandardTextField';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
	selectedGuest,
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

	return (
		<>
			<Heading>
				<h1>RSVP</h1> <p>Enter your full name below to find your reservation</p>
			</Heading>
			<StandardTextField
				label='Search Your Name'
				onChange={(e) => editSearchTerm(e)}
				type='text'
				required={true}
			/>
			{displayError && (
				<ErrorMessage>
					oh no! we’re having trouble finding your invite. Make sure the
					spelling is correct and if the problem persists contact m+m at
					mikemiwha@gmail.com
				</ErrorMessage>
			)}
			<ButtonContainer>
				<Button onClick={() => handleClick()} text='Find My RSVP' />
			</ButtonContainer>
		</>
	);
}
