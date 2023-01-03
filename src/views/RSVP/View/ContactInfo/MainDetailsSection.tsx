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
	internalGuest,
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
						defaultValue={internalGuest?.first_name}
						error={firstNameError}
						onChange={(e) => setFirstName(e.target.value)}
						helperText={firstNameError && 'First Name is Required'}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='last-name-input'
						label='Last Name'
						required
						type='text'
						defaultValue={internalGuest?.last_name}
						error={lastNameError}
						onChange={(e) => setLastName(e.target.value)}
						helperText={lastNameError && 'Last Name is Required'}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='email-input'
						label='Email'
						required
						type='text'
						defaultValue={internalGuest?.email}
						error={emailError}
						onChange={(e) => setEmail(e.target.value)}
						helperText={emailError && 'Email is Required'}
					/>
				</InputContainer>
			</ContactFeild>
		</div>
	);
}
