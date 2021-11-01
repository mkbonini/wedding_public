/** @format */

import React, { useState } from 'react';
import {
	RsvpTitle,
	SignUpForm,
	RsvpContainer,
	Input,
	Name,
	NamesContainer,
} from './styled-components';
import guestList from './utils/guestList.json';
import { handleInputRecieved, editSearchTerm } from './utils';
import Form from './Form';
export default function RSVP() {
	const [guestInputRecieved, setGuestInputRecieved] = useState(false);
	const [emailInputRecieved, setEmailInputRecieved] = useState(false);
	const [childInputRecieved, setChildInputRecieved] = useState(false);
	const [notesInputRecieved, setNotesInputRecieved] = useState(false);

	interface IGuest {
		name: string;
		plusOne: boolean;
		children: boolean;
		code: string;
	}
	const [selectedGuest, setSelectedGuest] = useState<IGuest>({
		name: '',
		plusOne: false,
		children: false,
		code: '',
	});

	const [searchTerm, setSearchTerm] = useState('');
	const [verified, setVarified] = useState(false);
	const [code, setCode] = useState('');
	const [error, setError] = useState(false);

	const filterNames = guestList.filter((guest) => {
		if (searchTerm === '') return null;
		else if (guest.name.toLowerCase().includes(searchTerm.toLowerCase())) {
			return guest;
		} else {
			return null;
		}
	});

	const handleGuestSelection = (guestSelected: any) => {
		const guest = guestList.find((guest) => guest.name === guestSelected);
		guest &&
			setSelectedGuest({
				name: guest.name,
				plusOne: guest.plusOne,
				children: guest.children,
				code: guest.code,
			});
	};

	const handleGuestDeselection = () => {
		setSelectedGuest({
			name: '',
			plusOne: false,
			children: false,
			code: '',
		});
		setSearchTerm('');
		setGuestInputRecieved(false);
		setEmailInputRecieved(false);
		setChildInputRecieved(false);
		setNotesInputRecieved(false);
		setCode('');
		setVarified(false);
	};

	const verfifyGuest = (e: any) => {
		if (selectedGuest.code === code) {
			setError(false);
			setVarified(true);
		} else {
			setError(true);
		}
	};

	return (
		<RsvpContainer>
			<SignUpForm>
				<RsvpTitle>
					<h1>RSVP</h1>
					<h2>Please respond by June 22, 2023</h2>
				</RsvpTitle>
				{!selectedGuest.name && (
					<>
						<Input
							type='text'
							placeholder='Search Your Name'
							onChange={(e: any) => editSearchTerm(e, setSearchTerm)}
						/>
						<NamesContainer>
							{filterNames.map((guest, i) => {
								return (
									<Name
										key={i}
										onClick={() => handleGuestSelection(guest.name)}
									>
										<p>{guest.name}</p>
									</Name>
								);
							})}
						</NamesContainer>
					</>
				)}
				{selectedGuest.name && !verified && (
					<>
						{error && <p style={{ color: 'red' }}>Error: Code is invalid</p>}
						<Input
							type='text'
							placeholder='Verification Code'
							onChange={(e) => setCode(e.target.value)}
						/>
						<button
							onClick={(e: any) => verfifyGuest(e)}
							style={{ maxWidth: '200px', marginTop: '20px' }}
						>
							Submit
						</button>
					</>
				)}

				{selectedGuest.name && verified && (
					<div style={{ paddingBottom: '20px' }}>
						<span>
							You are RSVP'ing as{' '}
							<span style={{ fontWeight: 800 }}>{selectedGuest.name}</span>. To
							deselect and return to search, click
						</span>{' '}
						<span
							style={{ fontWeight: 800, cursor: 'pointer' }}
							onClick={() => handleGuestDeselection()}
						>
							HERE
						</span>
					</div>
				)}
				<Form
					verified={verified}
					selectedGuest={selectedGuest}
					handleInputRecieved={handleInputRecieved}
					childInputRecieved={childInputRecieved}
					guestInputRecieved={guestInputRecieved}
					emailInputRecieved={emailInputRecieved}
					notesInputRecieved={notesInputRecieved}
					setChildInputRecieved={setChildInputRecieved}
					setEmailInputRecieved={setEmailInputRecieved}
					setNotesInputRecieved={setNotesInputRecieved}
					setGuestInputRecieved={setGuestInputRecieved}
				/>
			</SignUpForm>
		</RsvpContainer>
	);
}
