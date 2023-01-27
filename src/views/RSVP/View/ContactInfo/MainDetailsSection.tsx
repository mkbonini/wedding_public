/** @format */
import { ContactFeild, InputContainer } from './styled-components';

import TextField from '@mui/material/TextField';

export default function MainDetailsSection({
	setFirstName,
	setLastName,
	setEmail,
	firstNameError,
	lastNameError,
	emailError,
	currentGuest,
	selectedGuest,
	loaded,
}) {
	return (
		<div>
			<div className='sub-heading'>Your Details:</div>
			<ContactFeild>
				<InputContainer className='input-group '>
					<TextField
						fullWidth
						id='first-name-input'
						label='First Name'
						required
						type='text'
						defaultValue={
							loaded ? currentGuest?.first_name : selectedGuest?.first_name
						}
						error={firstNameError}
						onChange={(e) => setFirstName(e.target.value)}
						helperText={firstNameError && 'First name is required'}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='last-name-input'
						label='Last Name'
						required
						type='text'
						defaultValue={
							loaded ? currentGuest?.last_name : selectedGuest?.last_name
						}
						error={lastNameError}
						onChange={(e) => setLastName(e.target.value)}
						helperText={lastNameError && 'Last name is required'}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='email-input'
						label='Email'
						required
						type='text'
						defaultValue={loaded ? currentGuest?.email : selectedGuest?.email}
						error={emailError}
						onChange={(e) => setEmail(e.target.value)}
						helperText={emailError && 'Please enter a valid email'}
					/>
				</InputContainer>
			</ContactFeild>
		</div>
	);
}
