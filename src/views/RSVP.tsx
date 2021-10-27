/** @format */

import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 45px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

const SignUpForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 500px;
	margin: 2rem;
	padding: 4rem 0rem;
	border: 1px solid lightgray;
	border-radius: 5px;
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 600px;
		width: 100%;
	}
	h2 {
		color: black;
		font-weight: 500;
		text-align: center;
		font-family: 'Urbanist', sans-serif;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		min-width: 240px;
	}
	input {
		&.form-input {
			height: 40px;
			width: 99%;
			border: none;
			background-color: whitesmoke;
			margin-bottom: 20px;
			text-align: center;
			&:focus {
				outline: none;
			}
			border-bottom: ${(p) => p.color && `5px solid ${p.color}`};
		}
		&.radio-input {
			width: 20px;
			height: 20px;
		}
	}
	button {
		width: 90%;
		height: 40px;
		border: none;
		border-radius: 25px;
		margin-top: -10px;
		font-weight: 500;
		font-size: 12px;
		background-color: ${(p) => p.color && p.color};
		box-shadow: 1px 3px 4px lightgray;
		color: white;
		&:hover {
			box-shadow: 1px 5px 8px lightgray;
		}
	}
	@media only screen and (max-width: 1200px) {
		margin: 20px;
		padding: 60px 0px;
		min-width: unset;
		border: unset;
		border-top: 1px solid whitesmoke;
	}
`;

const Radio = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	div {
		width: 150px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-bottom: 40px;
		label {
			margin: 10px;
		}
	}
`;

const RsvpContainer = styled.div`
	height: 100%;
	padding-bottom: 8rem;
`;

export default function RSVP() {
	return (
		<RsvpContainer>
			<SignUpForm>
				<Title>
					<h1>RSVP</h1>
				</Title>
				<form action='/my-handling-form-page' method='post'>
					<label htmlFor='name'></label>
					<input
						className='form-input'
						type='text'
						id='name'
						name='user_name'
						placeholder='First and Last Name'
					/>

					<label htmlFor='plus-one'></label>
					<input
						className='form-input'
						type='text'
						id='plus-one-name'
						name='plus_one'
						placeholder='Plus One Name'
					/>

					<label htmlFor='mail'></label>
					<input
						className='form-input'
						type='email'
						id='mail'
						name='user_email'
						placeholder='Email'
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
							<label htmlFor='attending'>Attending</label>
						</div>
						<div>
							<input
								className='radio-input'
								type='radio'
								id='not-attending'
								name='rsvp'
								value='not-attending'
							/>
							<label htmlFor='not-attending'>Not Attending</label>
						</div>
					</Radio>
					<button onClick={() => alert('signed up')}>SUBMIT</button>
				</form>
			</SignUpForm>
		</RsvpContainer>
	);
}
