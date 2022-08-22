/** @format */
import styled from 'styled-components';
import { useState } from 'react';
import Stepper from '../../../components/Stepper';
import Toggle from '../../../components/Toggle';
import { FaTrashAlt } from 'react-icons/fa';
import { handleInputRecieved } from '../utils';
import React from 'react';
import { utimes } from 'fs';
export default function ContactInfo({
	regressFlow,
	progressFlow,
	selectedGuest,
}) {
	function handleBackButton() {
		regressFlow();
	}

	const ContactInfoSection = styled.div`
		width: 100%;
		max-width: 1200px;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 8rem;
		h1 {
			font-size: 20px;
		}
		h2 {
			font-size: 17px;
			margin-left: 15px;
		}
		p {
			padding: 0;
			margin: 0px 0px 50px 0px;
			&.plus-one {
				margin: 0px 0px 10px 15px;
			}
		}
	`;

	const Form = styled.form`
		label {
			font-size: 14px;
		}
		input {
			&.form-input {
				height: 50px;
				min-width: 300px;
				width: 100%;
				border: 1px solid gray;
				background-color: #ffffff;
				border-radius: 3px;
				text-align: start;
				padding-left: 15px;
				&:focus {
					outline: none;
				}
				border-bottom: ${(p) => p.color && `5px solid ${p.color}`};
			}
		}
	`;

	const ContactFeild = styled.div`
		display: flex;
		flex-direction: row;
	`;

	const FormFeild = styled.div`
		display: flex;
		flex-direction: column;
		margin: 15px;
		select {
			display: block;
			padding: 10px;
			height: 55px;
			max-width: 330px;
			font-size: 16px;
			border: 1px solid gray;
			background-color: #ffffff;
			border-radius: 3px;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			appearance: none;
			background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
			background-repeat: no-repeat;
			background-position: right 1rem center;
			background-size: 1em;
		}
	`;

	const ImageContainer = styled.div`
		&.delete-button {
			width: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 12px;
			padding: 7px;
			cursor: pointer;
			svg {
				font-size: 20px;
			}
		}
	`;

	const ButtonContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	`;

	const Button = styled.button`
		height: 50px;
		width: 200px;

		&.main {
			background-color: #000000;
			color: #ffffff;
		}
		&.secondary {
			color: #000000;
			background-color: #ffffff;
			border: 1px solid #000000;
		}
	`;

	const ChildInput = (index) => {
		return (
			<ContactFeild>
				<FormFeild>
					<label htmlFor='child_name' className='label-visible'>
						Name
					</label>
					<input
						className='form-input'
						type='text'
						id='child_name'
						name='child_name'
						placeholder='Name'
					/>
				</FormFeild>
				<FormFeild>
					<label htmlFor='child_age' className='label-visible'>
						Age
					</label>
					<input
						className='form-input'
						type='text'
						id='child_age'
						name='child_age'
						placeholder='Age'
					/>
				</FormFeild>
				<ImageContainer
					className='delete-button'
					onClick={() => removeChildInParty(index)}
				>
					<FaTrashAlt />
				</ImageContainer>
			</ContactFeild>
		);
	};

	const [childInputList, setChildInputList] = useState<any>([
		<ChildInput index={0} />,
	]);
	const [noPlusOne, setNoPlusOne] = useState(true);
	const [noChildren, setNoChildren] = useState(true);
	const [declineRSVP, setDeclineRSVP] = useState(true);

	//Add also wipes info
	function onAddButtonClick() {
		const maxAdditionalChildren = 4;
		if (childInputList.length < maxAdditionalChildren) {
			setChildInputList(
				childInputList.concat(<ChildInput index={childInputList.length} />)
			);
		}
	}
	function handleSubmit(event) {
		event.preventDefault();
		alert('form submitted');
	}

	//This needs work. Currently it wipes away all info put into the inputs when you delete a line.
	function removeChildInParty(index) {
		const filtered = childInputList.filter((child, i) => i !== index);
		setChildInputList(filtered);
	}

	return (
		<>
			<Stepper step={1} />
			<ContactInfoSection>
				<h1>Verify Contact Info</h1>
				<p> Update any information that is relevant</p>

				<Form onSubmit={(event) => handleSubmit(event)}>
					<h2>Your details:</h2>
					<ContactFeild>
						<FormFeild>
							<label htmlFor='first_name' className='label-visible'>
								First name
							</label>
							<input
								className='form-input'
								type='text'
								id='first_name'
								name='first_name'
								placeholder='First Name'
								required
								defaultValue={selectedGuest.first_name}
							/>
						</FormFeild>
						<FormFeild>
							<label htmlFor='first_name' className='label-visible'>
								Last name
							</label>
							<input
								className='form-input'
								type='text'
								id='last_name'
								name='last_name'
								placeholder='Last Name'
								required
								defaultValue={selectedGuest.last_name}
							/>
						</FormFeild>
						<FormFeild>
							<label htmlFor='email' className='label-visible'>
								Email
							</label>
							<input
								className='form-input'
								type='text'
								id='email'
								name='email'
								required
								placeholder='Email address'
							/>
						</FormFeild>
					</ContactFeild>

					<h2>Will you be attending the wedding?</h2>

					<div onClick={() => setDeclineRSVP(!declineRSVP)}>
						<Toggle toggleActive={declineRSVP} />
					</div>
					{!declineRSVP && (
						<>
							<h2>Plus one:</h2>
							<p className='plus-one'>
								Your reservation includes{' '}
								<strong>{selectedGuest.plus_ones}</strong> plus one
								{selectedGuest.plus_ones === 1 ? '' : "'s"}. Will you be
								bringing somebody?
							</p>

							<div onClick={() => setNoPlusOne(!noPlusOne)}>
								<Toggle toggleActive={noPlusOne} />
							</div>
							{!noPlusOne && (
								<ContactFeild>
									<FormFeild>
										<label
											htmlFor='plus_one_first_name'
											className='label-visible'
										>
											First name
										</label>
										<input
											className='form-input'
											type='text'
											id='plus_one_first_name'
											name='plus_one_first_name'
											placeholder='First Name'
										/>
									</FormFeild>
									<FormFeild>
										<label
											htmlFor='plus_one_first_name'
											className='label-visible'
										>
											Last name
										</label>
										<input
											className='form-input'
											type='text'
											id='plus_one_last_name'
											name='plus_one_last_name'
											placeholder='Last Name'
										/>
									</FormFeild>
								</ContactFeild>
							)}
							<h2>Children:</h2>
							<p className='plus-one'>
								Do you have any children in your party?
							</p>
							<div onClick={() => setNoChildren(!noChildren)}>
								<Toggle toggleActive={noChildren} />
							</div>

							{!noChildren && (
								<>
									{childInputList}
									<button onClick={() => onAddButtonClick()}>Add Child</button>

									<p className='plus-one'>
										<span>
											<br />
											<strong>Important</strong>
											<br /> <br />
											We understand that leaving the kids at home for a whole
											weekend might not be possible, and while we would love to
											see them during the weekend, we are asking that young
											children (under 8 years old and outside of immediate
											family) not be present during the ceremony and dinner.
											This means either one parent will need to step out during
											these times, or we can help coordinate some sort of on
											site sitter situation. This expense would need to be paid
											for by the parents however.
										</span>
									</p>

									<p className='plus-one'>
										<span>
											<br />
											<strong>
												Who will watch the children during the ceremony /
												dinner?
											</strong>
										</span>
									</p>
									<FormFeild className='dropdown'>
										<select>
											<option value='' disabled selected>
												Select your option
											</option>
											<option value='sitter'>Sitter Service</option>
											<option value='self'>Watching them myself</option>
										</select>
									</FormFeild>
								</>
							)}
						</>
					)}
					<ButtonContainer>
						<Button>continue</Button>
					</ButtonContainer>
				</Form>
			</ContactInfoSection>
		</>
	);
}
