/** @format */
import { ContactFeild, InputContainer } from './styled-components';

import TextField from '@mui/material/TextField';

export default function MainDetailsSection({ setEmail, emailError, guest }) {
	return (
		<div>
			<div className='sub-heading'>Your Details:</div>
			<ContactFeild>
				<InputContainer className='input-group '>
					<TextField
						fullWidth
						id='first-name-input'
						label='First Name'
						type='text'
						defaultValue={guest?.first_name}
						inputProps={{ readOnly: true }}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='last-name-input'
						label='Last Name'
						type='text'
						defaultValue={guest?.last_name}
						inputProps={{ readOnly: true }}
					/>
				</InputContainer>
				<InputContainer className='input-group'>
					<TextField
						fullWidth
						id='email-input'
						label='Email'
						required
						type='text'
						defaultValue={guest?.email}
						error={emailError}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						helperText={emailError && 'Please enter a valid email'}
					/>
				</InputContainer>
			</ContactFeild>
		</div>
	);
}
