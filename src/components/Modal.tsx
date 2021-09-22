/** @format */

import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
	display: flex;
	flex-direction: row;
	padding: 2rem;
	background-color: white;
	position: fixed;
	overflow: scroll;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	z-index: 1;
	/* border-radius: 10px; */
	/* box-shadow: 10px 7px 20px lightgray; */
	h1 {
		font-size: 45px;
		color: black;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
	h2 {
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
	@media only screen and (max-width: 1200px) {
		flex-direction: column;
	}
`;

const Close = styled.div`
	align-self: end;
	font-size: 45px;
	color: black;
	padding: 0px 20px;
	font-family: 'Raleway', sans-serif;
	&:hover {
		font-weight: 500;
		cursor: pointer;
	}
`;

const Content = styled.div`
	width: 100%;
	h3 {
		font-family: 'Raleway', sans-serif;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 25px;
	}
`;
const SignupContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-bottom: 2rem;
`;
const LodgeNumberIcon = styled.div<{ color: string }>`
	width: 20px;
	height: 20px;
	padding: 5px;
	background-color: ${(p) => p.color && p.color};
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Name = styled.div`
	width: 150px;
	margin-left: 5px;
	color: black;
`;

const NameContainer = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0px 2px 2px 0px;
`;
const SignUpForm = styled.div<{ color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 500px;
	width: 100%;
	margin: 2rem;
	border: 1px solid whitesmoke;
	box-shadow: -1px 5px 10px lightgray;
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h2 {
		color: black;
		font-weight: 700;
		text-align: center;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		min-width: 240px;
	}
	input {
		height: 40px;
		width: 100%;
		border: none;
		background-color: whitesmoke;
		margin-bottom: 20px;
		text-align: center;
		&:focus {
			outline: none;
		}
		border-bottom: ${(p) => p.color && `5px solid ${p.color}`};
	}
	button {
		width: 50%;
		height: 40px;
		border: none;
		border-radius: 25px;
		margin-top: -10px;
		font-weight: 500;
		font-size: 12px;
		box-shadow: 1px 3px 4px lightgray;
		&:hover {
			background-color: ${(p) => p.color && p.color};
		}
	}
	@media only screen and (max-width: 1200px) {
		margin: 20px 0px;
		padding: 20px 0px;
	}
`;

type ModalProps = {
	setVisible: any;
	visible: boolean;
	data: any;
	cabinClicked: string;
};

const lodgeSignup = (capacity: number, color: string) => {
	return [...Array(capacity)].map((e, i) => (
		<NameContainer color={color}>
			<LodgeNumberIcon color={color}>{i + 1}</LodgeNumberIcon>
			<Name>Spot Available</Name>
		</NameContainer>
	));
};

export default function Modal({
	setVisible,
	visible,
	data,
	cabinClicked,
}: ModalProps) {
	const closeModal = () => {
		setVisible(false);
	};
	const modalInfo = () => {
		return data.map((lodge: any) => {
			if (lodge.id === cabinClicked && visible) {
				return (
					<ModalContainer>
						<Content>
							<Close onClick={closeModal}>x</Close>
							<h1>{lodge.name}</h1>
							<p>{lodge.description}</p>
							<span>
								See photos of cabin{' '}
								<a href={lodge.link} target='_blank'>
									here
								</a>
							</span>
							<h3>
								{lodge.capacity === 1 ? 'spot available' : 'spots available'}
							</h3>
							<SignupContainer>
								{lodgeSignup(lodge.capacity, lodge.color)}
							</SignupContainer>
						</Content>
						<SignUpForm color={lodge.color}>
							<h2>Reserve a Spot</h2>
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
					</ModalContainer>
				);
			}
		});
	};
	return modalInfo();
}
