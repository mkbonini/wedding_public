/** @format */

import React, { useState, useEffect } from 'react';

import StartPage from './Pages/StartPage';

export default function RSVP({ visible }) {
	const [guestList, setGuestList] = useState<any>([]);
	const [guestInputRecieved, setGuestInputRecieved] = useState(false);
	const [emailInputRecieved, setEmailInputRecieved] = useState(false);
	const [childInputRecieved, setChildInputRecieved] = useState(false);
	const [notesInputRecieved, setNotesInputRecieved] = useState(false);
	const [underConstruction, setUnderConstruction] = useState(false);

	const [selectedGuest, setSelectedGuest] = useState<any>(null);

	const [searchTerm, setSearchTerm] = useState('');
	const [verified, setVarified] = useState(false);
	const [code, setCode] = useState('1234');
	const [error, setError] = useState(false);

	const filterNames =
		guestList.length > 0 &&
		guestList?.filter((guest) => {
			const fullName = `${guest.first_name} ${guest.last_name}`;
			if (searchTerm === '') return null;
			else if (fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
				return guest;
			} else {
				return null;
			}
		});

	const handleGuestSelection = (guestSelected) => {
		const guest = guestList.find((guest) => guest === guestSelected);
		guest && setSelectedGuest(guest);
	};

	const handleGuestDeselection = () => {
		setSelectedGuest(null);
		setSearchTerm('');
		setGuestInputRecieved(false);
		setEmailInputRecieved(false);
		setChildInputRecieved(false);
		setNotesInputRecieved(false);
		setCode('');
		setVarified(false);
		setError(false);
	};

	const verifyGuest = (e) => {
		if (code === '1234') {
			setError(false);
			setVarified(true);
		} else {
			setError(true);
		}
	};

	async function getGuests() {
		try {
			const response = await fetch(
				'https://mm-wedding-backend.herokuapp.com/guests',
				{
					method: 'GET',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
						accept: 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error(`Error! status: ${response.status}`);
			}

			const result = await response.json();
			setGuestList(result);
			console.log('making request to guets api');
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getGuests();
	}, []);

	return (
		<StartPage
			verifyGuest={verifyGuest}
			verified={verified}
			handleGuestDeselection={handleGuestDeselection}
			handleGuestSelection={handleGuestSelection}
			guestList={guestList}
			filterNames={filterNames}
			selectedGuest={selectedGuest}
			setGuestInputRecieved={setGuestInputRecieved}
			setSearchTerm={setSearchTerm}
			setCode={setCode}
			error={error}
		/>
	);
}
