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
import ConstructionOverlay from '../../components/ConstructionOverlay';
export default function RSVP() {
	const underConstruction = false;
	const [guestInputRecieved, setGuestInputRecieved] = useState(false);
	const [emailInputRecieved, setEmailInputRecieved] = useState(false);
	const [childInputRecieved, setChildInputRecieved] = useState(false);
	const [notesInputRecieved, setNotesInputRecieved] = useState(false);

	interface IGuest {
		name: string;
		code: string;
		plusOne: boolean;
		children: boolean;
	}
	const [selectedGuest, setSelectedGuest] = useState<IGuest>({
		name: '',
		code: '',
		plusOne: false,
		children: false,
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
		setError(false);
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
		<>
			{underConstruction ? (
				<ConstructionOverlay page={'RSVP'} />
			) : (
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
								<p>You can find your verification code on your invite</p>
								{error && (
									<p style={{ color: 'red' }}>Error: Code is invalid</p>
								)}
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
								<button
									onClick={(e: any) => handleGuestDeselection()}
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

						{selectedGuest.name && verified && (
							<div style={{ paddingBottom: '20px' }}>
								<span>
									You are RSVP'ing as{' '}
									<span style={{ fontWeight: 800 }}>{selectedGuest.name}</span>.
									To deselect and return to search, click
								</span>{' '}
								<span style={{ fontWeight: 800 }}>back</span>
							</div>
						)}
						<Form
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
						/>
					</SignUpForm>
				</RsvpContainer>
			)}
		</>
	);
}
