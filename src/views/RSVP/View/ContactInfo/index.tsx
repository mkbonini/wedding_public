/** @format */

import { useState } from 'react';
import Stepper from '../../../../components/Stepper';
import Toggle from '../../../../components/Toggle';
import { FaTrashAlt } from 'react-icons/fa';
import { handleInputRecieved } from '../../utils';
import React from 'react';
import { utimes } from 'fs';
import {
	ContactFeild,
	FormFeild,
	ImageContainer,
	ContactInfoSection,
	Form,
	AttendingContent,
	Button,
	ButtonContainer,
} from './styled-components';

export default function ContactInfo({
	regressFlow,
	progressFlow,
	selectedGuest,
	declineRSVP,
	setDeclineRSVP,
}) {
	function handleBackButton() {
		regressFlow();
	}

	const [childList, setChildList] = useState([{ name: '', age: '' }]);
	const [plusOne, setPlusOne] = useState(false);
	const [children, setChildren] = useState(false);

	let handleChildInputChange = (i, e) => {
		let newChildList = [...childList];
		newChildList[i][e.target.name] = e.target.value;
		setChildList(newChildList);
	};

	let addChildFormField = (e) => {
		if (childList.length < 4) {
			setChildList([...childList, { name: '', age: '' }]);
		}
		e.preventDefault();
	};

	let removeChildFormField = (i) => {
		let newChildList = [...childList];
		newChildList.splice(i, 1);
		setChildList(newChildList);
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		alert(JSON.stringify(childList));
	};

	let determineProgressFlow = () => {
		if (declineRSVP) {
			progressFlow({ args: 'declinedRSVP' });
		} else {
			progressFlow();
		}
	};

	return (
		<>
			<Stepper step={1} />
			<ContactInfoSection>
				<h1>
					Hello, {selectedGuest?.first_name || 'No User'} Verify Contact Info
				</h1>
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
								required
								defaultValue={selectedGuest?.first_name}
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
								required
								defaultValue={selectedGuest?.last_name}
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
								defaultValue={selectedGuest?.email}
							/>
						</FormFeild>
					</ContactFeild>

					<h2>Will you be attending the wedding?</h2>

					<div>
						<Toggle
							toggleActive={declineRSVP}
							onClick={() => setDeclineRSVP(!declineRSVP)}
						/>
					</div>

					{!declineRSVP && (
						<AttendingContent child={children} plusOne={plusOne}>
							<h2>Plus one:</h2>
							<p className='plus-one'>
								Your reservation includes a plus one. Will you be bringing
								somebody?
							</p>

							<div>
								<Toggle
									toggleActive={!plusOne}
									onClick={() => setPlusOne(!plusOne)}
								/>
							</div>
							{plusOne && (
								<ContactFeild className='plus-one-feild'>
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
										/>
									</FormFeild>
								</ContactFeild>
							)}

							<h2>Children:</h2>
							<p className='plus-one'>
								Do you have any children in your party?
							</p>
							<div>
								<Toggle
									toggleActive={!children}
									onClick={() => setChildren(!children)}
								/>
							</div>
							{children && (
								<ContactFeild className={`children-feild`}>
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
									{childList.map((element, index) => (
										<ContactFeild>
											<FormFeild>
												<label htmlFor='name' className='label-visible'>
													Name
												</label>
												<input
													className='form-input'
													type='text'
													id='name'
													name='name'
													value={element.name || ''}
													onChange={(e) => handleChildInputChange(index, e)}
												/>
											</FormFeild>
											<FormFeild>
												<label htmlFor='age' className='label-visible'>
													Age
												</label>
												<input
													className='form-input'
													type='text'
													id='age'
													name='age'
													value={element.age || ''}
													onChange={(e) => handleChildInputChange(index, e)}
												/>
											</FormFeild>
											<ImageContainer
												className='delete-button'
												onClick={() => removeChildFormField(index)}
											>
												<FaTrashAlt />
											</ImageContainer>
										</ContactFeild>
									))}
									{childList.length < 4 && (
										<button
											onClick={(e) => addChildFormField(e)}
											style={{ marginTop: '30px' }}
										>
											Add Child
										</button>
									)}
								</ContactFeild>
							)}
						</AttendingContent>
					)}

					<ButtonContainer>
						<Button className='secondary' onClick={() => regressFlow()}>
							BACK
						</Button>
						<Button className='main' onClick={() => determineProgressFlow()}>
							CONTINUE
						</Button>
					</ButtonContainer>
				</Form>
			</ContactInfoSection>
		</>
	);
}
