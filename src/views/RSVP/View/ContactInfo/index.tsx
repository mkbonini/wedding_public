/** @format */

import { useState } from 'react';
import {
	createPlusOne,
	deletePlusOne,
	updateGuest,
	updatePlusOne,
	createKids,
} from '../../Model';
import Confirmation from '../../../../components/Confirmation';
import ConfirmationCabin from '../../../../components/ConfirmationCabin';
import Toggle from '../../../../components/Toggle';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { getFormValues, plusOneFormValue } from './utils';
import {
	ContactFeild,
	ImageContainer,
	ContactInfoSection,
	Form,
	ButtonContainer,
	InputContainer,
	ToggleContainer,
	KidsContainer,
	AddChildLink,
	RsvpContainer,
	LineBreak,
} from './styled-components';
import StandardTextField from '../../../../components/StandardTextField';
import Button from '../../../../components/Button';
import ButtonSecondary from '../../../../components/ButtonSecondary';

export default function ContactInfo({
	regressFlow,
	progressFlow,
	selectedGuest,
}) {
	const [rsvp, setRsvp] = useState(selectedGuest?.rsvp || '');
	const [plusOneName, setPlusOneName] = useState('');
	const [plusOneToggle, setPlusOneToggle] = useState(false);
	const [children, setChildren] = useState(false);
	const [childCare, setChildCare] = useState('');
	const [submitRsvpDecline, setSubmitRsvpDecline] = useState(false);
	const [needsRsvpInfo, setNeedsRsvpInfo] = useState(false);
	const [childList, setChildList] = useState([
		{
			name: '',
			age: '',
			needs_bed: '',
			guest_id: selectedGuest.id,
			child_care: childCare,
		},
	]);

	let handleChildInputChange = (i, e) => {
		let newChildList = [...childList];
		newChildList[i][e.target.name] = e.target.value;
		newChildList[i].child_care = childCare;
		setChildList(newChildList);
	};

	let handlePlusOneInputChange = (e) => {
		setPlusOneName(e.target.value);
	};

	let addChildFormField = (e) => {
		if (childList.length < 4) {
			setChildList([
				...childList,
				{
					name: '',
					age: '',
					needs_bed: '',
					guest_id: selectedGuest.id,
					child_care: childCare,
				},
			]);
		}
		e.preventDefault();
	};

	let removeChildFormField = (i) => {
		let newChildList = [...childList];
		newChildList.splice(i, 1);
		setChildList(newChildList);
	};

	const handleChildCare = (event) => {
		setChildCare(event.target.value);
	};

	const handleRsvpChange = (event) => {
		setRsvp(event.target.value);
	};

	function handleContinue() {
		if (rsvp === 'no') {
			setSubmitRsvpDecline(true);
		} else if (rsvp === '') {
			setNeedsRsvpInfo(true);
		} else {
			setNeedsRsvpInfo(false);
			setSubmitRsvpDecline(false);

			let formValues = getFormValues();
			let plusOne = selectedGuest?.plus_ones.length === 1;
			let noPlusOne = selectedGuest?.plus_ones?.length === 0;
			let plusOneId = selectedGuest?.plus_ones[0]?.id;
			let plusOneInput = plusOneFormValue();

			updateGuest(selectedGuest.id, {
				...formValues,
				rsvp: rsvp,
			});

			if (children) {
				createKids(childList);
			}

			if (selectedGuest.plus_one_count !== 0) {
				if (rsvp === null || rsvp === 'no') {
					progressFlow(rsvp);
				} else if (noPlusOne && plusOneToggle) {
					createPlusOne({ ...plusOneInput, guest_id: selectedGuest.id });
				} else if (plusOne && plusOneToggle) {
					updatePlusOne(plusOneId, plusOneInput);
				} else if (plusOne && !plusOneToggle) {
					deletePlusOne(plusOneId);
				} else {
					console.log('no plus one');
				}
			}
			progressFlow(rsvp);
		}
	}

	return (
		<ContactInfoSection>
			<h1>
				Hello {selectedGuest?.first_name || 'No User'}, <br /> we found your
				reservation!
			</h1>
			<p className='heading'> Please update the information below</p>

			{needsRsvpInfo && (
				<ConfirmationCabin
					setState={setNeedsRsvpInfo}
					state={needsRsvpInfo}
					text='You selected an rsvp option from the dropdown. Please select before continuing.'
				/>
			)}
			{submitRsvpDecline && (
				<Confirmation
					submitRsvpDecline={submitRsvpDecline}
					setSubmitRsvpDecline={setSubmitRsvpDecline}
					rsvp={rsvp}
					progressFlow={progressFlow}
				/>
			)}

			<RsvpContainer>
				<h2>Will you be attending the wedding?</h2>
				<FormControl sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}>
					<InputLabel id='rsvp-label'>Please select</InputLabel>
					<Select
						labelId='rsvp-label'
						label='Please Select'
						onChange={handleRsvpChange}
						defaultValue={selectedGuest?.rsvp}
					>
						<MenuItem value={'yes'}>Yes</MenuItem>
						<MenuItem value={'no'}>No</MenuItem>
					</Select>
				</FormControl>
			</RsvpContainer>

			<Form>
				<h2>Your details:</h2>
				<ContactFeild>
					<InputContainer className='input-group'>
						<StandardTextField
							id='first-name-input'
							label='First Name'
							required={true}
							type='text'
							defaultValue={selectedGuest?.first_name}
						/>
					</InputContainer>
					<InputContainer className='input-group'>
						<StandardTextField
							id='last-name-input'
							label='Last Name'
							required={true}
							type='text'
							defaultValue={selectedGuest?.last_name}
						/>
					</InputContainer>
					<InputContainer className='input-group'>
						<StandardTextField
							id='email-input'
							label='Email'
							required={true}
							type='text'
							defaultValue={selectedGuest?.email}
						/>
					</InputContainer>
				</ContactFeild>

				{rsvp === 'yes' && (
					<div>
						{selectedGuest.plus_one_count !== 0 && (
							<ToggleContainer>
								<div>
									<h2>
										Your reservation includes a plus one. Will you be bringing
										somebody?
									</h2>
								</div>
								<Toggle
									toggleActive={plusOneToggle}
									onChange={() => setPlusOneToggle(!plusOneToggle)}
								/>
							</ToggleContainer>
						)}
						{plusOneToggle && (
							<ContactFeild className='plus-one-field'>
								<p>If yes, please enter their name below</p>
								<InputContainer className='no-gap'>
									<StandardTextField
										id='plus-one-input'
										label='Full Name'
										required={false}
										type='text'
										defaultValue={selectedGuest?.plus_ones[0]?.name}
										onChange={(e) => handlePlusOneInputChange(e)}
									/>
								</InputContainer>
							</ContactFeild>
						)}

						<ToggleContainer>
							<h2>Do you have any children in your party?</h2>
							<Toggle
								toggleActive={children}
								onChange={() => setChildren(!children)}
							/>
						</ToggleContainer>
						{children && (
							<ContactFeild className={`children-field`}>
								<div className='message-container'>
									<p className='title'>Important Message for Parents</p>
									<p className='description'>
										We understand that leaving the kids at home for a whole
										weekend might not be possible, and while we would love to
										see them during the weekend, we are asking that young
										children (under 8 years old and outside of immediate family)
										not be present during the ceremony and dinner. This means
										either one parent will need to step out during these times,
										or we can help coordinate some sort of on site sitter
										situation. This expense would need to be paid for by the
										parents however.
									</p>
								</div>
								<h2>
									Who will watch the children during the ceremony & dinner?
								</h2>

								<FormControl sx={{ m: 1, maxWidth: 250, margin: 0 }}>
									<InputLabel id='child-care-label'>
										Please select an option
									</InputLabel>
									<Select
										labelId='child-care-label'
										onChange={handleChildCare}
										label='Please select an option'
										value={childCare ? childCare : ''}
									>
										<MenuItem value={'guardian'}>A Parent</MenuItem>
										<MenuItem value={'sitter'}>Sitters Service</MenuItem>
									</Select>
								</FormControl>
								<KidsContainer>
									<h2 className='enter-info'>
										Please enter their information below
									</h2>

									{childList.map((element, index) => (
										<div key={`${index}-child`}>
											<ContactFeild className='child-inputs'>
												<div style={{ display: 'flex' }}>
													<InputContainer className='no-gap input-gap'>
														<StandardTextField
															label='Full Name'
															required={false}
															type='text'
															name='name'
															onChange={(e) => handleChildInputChange(index, e)}
															defaultValue={element.name || ''}
														/>
													</InputContainer>
													<InputContainer className='input-gap'>
														<TextField
															sx={{ maxWidth: 100 }}
															label='Age'
															required={false}
															type='number'
															name='age'
															onChange={(e) => handleChildInputChange(index, e)}
															defaultValue={element.age || ''}
														/>
													</InputContainer>
												</div>
												<div style={{ display: 'flex', flexDirection: 'row' }}>
													<div>
														<p>Does your child need their own bed?</p>
														<FormControl
															sx={{
																m: 1,
																maxWidth: 300,
																margin: 0,
																width: '100%',
															}}
														>
															<InputLabel id='kid-bed-label'>
																Please Select
															</InputLabel>
															<Select
																labelId='kid-bed-label'
																label='Please Select'
																name='needs_bed'
																onChange={(e) =>
																	handleChildInputChange(index, e)
																}
																defaultValue={element.needs_bed || ''}
															>
																<MenuItem value={'yes'}>Yes</MenuItem>
																<MenuItem value={'no'}>No</MenuItem>
															</Select>
														</FormControl>
													</div>
													<ImageContainer
														className='delete-button'
														onClick={() => removeChildFormField(index)}
													>
														<FaTrashAlt />
													</ImageContainer>
												</div>
											</ContactFeild>
											<LineBreak />
										</div>
									))}
								</KidsContainer>
								{childList.length < 4 && (
									<AddChildLink onClick={(e) => addChildFormField(e)}>
										<FaPlus />
										Add Child
									</AddChildLink>
								)}
							</ContactFeild>
						)}
					</div>
				)}

				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => handleContinue()} text='Continue' />
				</ButtonContainer>
			</Form>
		</ContactInfoSection>
	);
}
