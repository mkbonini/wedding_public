/** @format */

import React from 'react';
import { Radio } from './styled-components/index';

interface IGuest {
	name: string;
	plusOne: boolean;
	children: boolean;
	code: string;
}

interface FormProps {
	selectedGuest: IGuest;
	verified: boolean;
	handleInputRecieved: (input: any) => void;
	handleGuestDeselection: () => void;
	childInputRecieved: boolean;
	guestInputRecieved: boolean;
	emailInputRecieved: boolean;
	notesInputRecieved: boolean;
	setChildInputRecieved?: (input: boolean) => void;
	setEmailInputRecieved?: (input: boolean) => void;
	setNotesInputRecieved?: (input: boolean) => void;
	setGuestInputRecieved?: (input: boolean) => void;
}

export default function Form({
	selectedGuest,
	verified,
	handleInputRecieved,
	handleGuestDeselection,
	childInputRecieved,
	guestInputRecieved,
	emailInputRecieved,
	notesInputRecieved,
	setChildInputRecieved,
	setEmailInputRecieved,
	setNotesInputRecieved,
	setGuestInputRecieved,
}: FormProps) {
	return (
		<form action='/my-handling-form-page' method='post'>
			{selectedGuest.name && verified && (
				<>
					<label
						htmlFor='name'
						className={selectedGuest.name ? 'label-visible' : ''}
					>
						First and Last Name
					</label>
					<input
						className='form-input'
						type='text'
						id='name'
						name='user_name'
						placeholder='First and Last Name'
						defaultValue={selectedGuest.name}
					/>
				</>
			)}
			{selectedGuest.plusOne && verified && (
				<>
					<label
						htmlFor='plus-one'
						className={guestInputRecieved ? 'label-visible' : ''}
					>
						Plus One Full Name
					</label>
					<input
						className='form-input'
						type='text'
						id='plus-one-name'
						name='plus_one'
						placeholder='Plus One Full Name'
						onChange={(e) =>
							handleInputRecieved({
								e,
								label: 'guest',
								setGuestInputRecieved,
							})
						}
					/>
				</>
			)}

			{selectedGuest.children && verified && (
				<>
					<label
						htmlFor='children'
						className={childInputRecieved ? 'label-visible' : ''}
					>
						Kids? How Many & Names
					</label>
					<input
						className='form-input'
						type='text'
						id='plus-one-name'
						name='plus_one'
						placeholder='Kids? How Many & Names'
						onChange={(e) =>
							handleInputRecieved({
								e,
								label: 'child',
								setChildInputRecieved,
							})
						}
					/>
				</>
			)}
			{selectedGuest.name && verified && (
				<>
					<label
						htmlFor='mail'
						className={emailInputRecieved ? 'label-visible' : ''}
					>
						Email
					</label>
					<input
						className='form-input'
						type='email'
						id='mail'
						name='user_email'
						placeholder='Email'
						onChange={(e) =>
							handleInputRecieved({
								e,
								label: 'email',
								setEmailInputRecieved,
							})
						}
					/>
					<label
						htmlFor='additional'
						className={notesInputRecieved ? 'label-visible' : ''}
					>
						Comments or Questions? Any diet/allergy or special needs we should
						be aware of?
					</label>
					<input
						className='form-input'
						type='text'
						id='additional'
						name='additional'
						placeholder='Comments or Questions'
						onChange={(e) =>
							handleInputRecieved({
								e,
								label: 'notes',
								setNotesInputRecieved,
							})
						}
					/>
					<h3>Can you attend?</h3>
					<Radio>
						<div>
							<input
								className='radio-input'
								type='radio'
								id='attending'
								name='rsvp'
								value='attending'
							/>
							<label className='radio-label' htmlFor='attending'>
								Let's Party!
							</label>
						</div>
						<div>
							<input
								className='radio-input'
								type='radio'
								id='not-attending'
								name='rsvp'
								value='not-attending'
							/>
							<label className='radio-label' htmlFor='not-attending'>
								Sorry Can't Come
							</label>
						</div>
					</Radio>
					<button onClick={() => alert('signed up')}>Submit</button>
					<button
						onClick={(e: any) => handleGuestDeselection()}
						id='back-button'
					>
						Back
					</button>
				</>
			)}
		</form>
	);
}
