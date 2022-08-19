/** @format */

import React, { useState, useEffect } from 'react';
import {
	RsvpTitle,
	SignUpForm,
	RsvpContainer,
	Input,
	Name,
	NamesContainer,
	BackgroundAccent,
	Accent,
} from './styled-components';
import Breadcrumbs from '../../components/Breadcrumbs';
// import guestList from './utils/guestList.json';
import { handleInputRecieved, editSearchTerm } from './utils';
import Form from './Form';
import UnderConstruction from '../../components/UnderConstruction';

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

	const verfifyGuest = (e) => {
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

	console.log(selectedGuest, 'selected guest');
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<>
					<RsvpContainer>
						<Breadcrumbs location={'rsvp'} />
						<SignUpForm>
							<RsvpTitle>
								<h1>RSVP</h1>
								<Accent />
								<h2>Deadline is June 22, 2023</h2>
								{selectedGuest === null ? (
									<p>Enter your name below to find your invite.</p>
								) : (
									<p>You can find your verification code on your invite</p>
								)}
							</RsvpTitle>
							{selectedGuest === null && (
								<>
									<Input
										type='text'
										placeholder='Search Your Name'
										onChange={(e) => editSearchTerm(e, setSearchTerm)}
									/>
									<NamesContainer>
										{filterNames.length > 0 &&
											filterNames?.map((guest, i) => {
												return (
													<Name
														key={i}
														onClick={() => handleGuestSelection(guest)}
													>
														<p>{`${guest.first_name} ${guest.last_name}`}</p>
													</Name>
												);
											})}
									</NamesContainer>
								</>
							)}
							{selectedGuest !== null && !verified && (
								<>
									{error && (
										<p style={{ color: 'red' }}>Error: Code is invalid</p>
									)}
									<Input
										type='text'
										placeholder='Verification Code'
										onChange={(e) => setCode(e.target.value)}
									/>
									<button
										onClick={(e) => verfifyGuest(e)}
										style={{ maxWidth: '200px', marginTop: '20px' }}
									>
										Submit
									</button>
									<button
										onClick={(e) => handleGuestDeselection()}
										style={{
											maxWidth: '200px',
											marginTop: '10px',
											backgroundColor: 'white',
											color: 'black',
											boxShadow: '1px 2px 9px lightgrey',
										}}
									>
										Back
									</button>
								</>
							)}

							{selectedGuest !== null && verified && (
								<div style={{ paddingBottom: '20px' }}>
									<span>
										You are RSVP'ing as{' '}
										<span style={{ fontWeight: 800 }}>
											{`${selectedGuest.first_name} ${selectedGuest.last_name}`}
										</span>
										. To deselect and return to search, click{' '}
									</span>
									<span
										onClick={() => handleGuestDeselection()}
										style={{ fontWeight: 800 }}
									>
										back
									</span>
								</div>
							)}
							{/* <Form
							verified={verified}
							selectedGuest={selectedGuest}
							handleGuestDeselection={handleGuestDeselection}
							handleInputRecieved={handleInputRecieved}
							childInputRecieved={childInputRecieved}
							guestInputRecieved={guestInputRecieved}
							emailInputRecieved={emailInputRecieved}
							notesInputRecieved={notesInputRecieved}
							setChildInputRecieved={setChildInputRecieved}
							setEmailInputRecieved={setEmailInputRecieved}
							setNotesInputRecieved={setNotesInputRecieved}
							setGuestInputRecieved={setGuestInputRecieved}
						/> */}
						</SignUpForm>
					</RsvpContainer>
					<BackgroundAccent />
				</>
			)}
		</>
	);
}
