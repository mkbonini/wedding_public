/** @format */
import { useState } from 'react';
import {
	Heading,
	ButtonContainer,
	ErrorMessage,
	StartPageContainer,
} from '../styled-components';
import Button from '../../../components/Button';
import StandardTextField from '../../../components/StandardTextField';
import { getSelectedGuest } from '../Model';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
	selectedGuest,
}) {
	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);

	function editSearchTerm(e) {
		let term = e.target.value.toLowerCase();
		setSearchTerm(term);
	}

	async function getSelectedGuestInfo() {
		let foundGuest = guestList?.find((guest) =>
			searchTerm.includes(guest.name.toLowerCase())
		);
		if (!!foundGuest) {
			let promise = new Promise((resolve) => {
				resolve(getSelectedGuest(foundGuest?.guest_id));
			});
			let result = await promise;
			setSelectedGuest(result);
			return result;
		}
	}

	function handleClick() {
		getSelectedGuestInfo().then(function (result) {
			if (!!result) {
				progressFlow();
				setDisplayError(false);
			} else {
				setDisplayError(true);
			}
		});
	}

	return (
		<StartPageContainer>
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
		</StartPageContainer>
	);
}
