/** @format */

import React from 'react';
import { Radio } from './styled-components/index';

interface IGuest {
	name: string;
	plusOne: boolean;
	children: boolean;
}

interface FormProps {
	selectedGuest: IGuest;
	handleInputRecieved: (input: any) => void;
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
	handleInputRecieved,
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
			{selectedGuest.name && (
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
			{selectedGuest.plusOne && (
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

			{selectedGuest.children && (
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
			{selectedGuest.name && (
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
						Notes? Diet/Allergies, special needs or anything important for us to
						know?
					</label>
					<input
						className='form-input'
						type='text'
						id='additional'
						name='additional'
						placeholder='Any Notes?'
						onChange={(e) =>
							handleInputRecieved({
								e,
								label: 'notes',
								setNotesInputRecieved,
							})
						}
					/>
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
								Let's Party
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
								Can't Come
							</label>
						</div>
					</Radio>
					<button onClick={() => alert('signed up')}>SUBMIT</button>
				</>
			)}
		</form>
	);
}
