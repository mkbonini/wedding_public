/** @format */

import React from 'react';
import { SignUpForm } from './styled-components';

export default function Form({ lodge }) {
	return (
		<SignUpForm color={lodge.color}>
			<h2>Reserve Your Spot</h2>
			<form action='/my-handling-form-page' method='post'>
				<ul>
					<li>
						<label htmlFor='name'></label>
						<input
							className='form-input'
							type='text'
							id='name'
							name='user_name'
							placeholder='Search Name'
						/>
					</li>
					<li>
						<label htmlFor='mail'></label>
						<input
							className='form-input'
							type='email'
							id='mail'
							name='user_email'
							placeholder='Email'
						/>
					</li>
				</ul>
				<button onClick={() => alert('signed up')}>SUBMIT</button>
			</form>
		</SignUpForm>
	);
}
