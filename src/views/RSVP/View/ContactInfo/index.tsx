/** @format */

import { useEffect, useState } from 'react';
import {
	createPlusOne,
	deletePlusOne,
	updateGuest,
	updatePlusOne,
	createKids,
} from '../../Model';
import Confirmation from '../../../../components/Confirmation';
import Toggle from '../../../../components/Toggle';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

import {
	ContactFeild,
	ContactInfoSection,
	Form,
	ButtonContainer,
	InputContainer,
	ToggleContainer,
	RsvpContainer,
	SubmitButton,
} from './styled-components';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import ChildSection from './ChildSection';
import MainDetailsSection from './MainDetailsSection';

export default function ContactInfo({
	regressFlow,
	progressFlow,
	internalGuest,
	setInternalGuest,
}) {
	const [rsvp, setRsvp] = useState(internalGuest?.rsvp ?? '');
	const [plusOneName, setPlusOneName] = useState(
		internalGuest?.plus_ones[0]?.name ?? ''
	);
	const [plusOneToggle, setPlusOneToggle] = useState(
		internalGuest?.plus_ones[0] ? true : false
	);
	const [children, setChildren] = useState(
		internalGuest?.kids?.length > 0 ? true : false
	);

	const [submitRsvpDecline, setSubmitRsvpDecline] = useState(false);

	const [firstName, setFirstName] = useState(internalGuest?.first_name ?? '');
	const [lastName, setLastName] = useState(internalGuest?.last_name ?? '');
	const [email, setEmail] = useState(internalGuest?.email ?? '');

	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [rsvpError, setRsvpError] = useState(false);
	const [plusOneError, setPlusOneError] = useState(false);
	const [childCareError, setChildCareError] = useState(false);

	const [childCare, setChildCare] = useState(
		internalGuest?.kids[0]?.child_care ?? ''
	);
	const [childList, setChildList] = useState(
		internalGuest?.kids?.length > 0
			? internalGuest?.kids
			: [
					{
						name: '',
						age: '',
						needs_bed: '',
						guest_id: internalGuest.id,
						child_care: childCare,
						team_id: 0,
					},
			  ]
	);

	const handleRsvpChange = (event) => {
		setRsvp(event.target.value);
	};

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	// const checkForErrors = () => {
	// 	setFirstNameError(false);
	// 	setLastNameError(false);
	// 	setEmailError(false);
	// 	setRsvpError(false);
	// 	setPlusOneError(false);

	// 	if (rsvp === '') {
	// 		setRsvpError(true);
	// 	}
	// 	if (firstName === '') {
	// 		setFirstNameError(true);
	// 	}
	// 	if (lastName === '') {
	// 		setLastNameError(true);
	// 	}
	// 	if (!validateEmail(email)) {
	// 		setEmailError(true);
	// 	}
	// 	if (plusOneToggle && plusOneName === '') {
	// 		setPlusOneError(true);
	// 	}
	// };

	function checkForErrors() {
		if (children && childCare === '') {
			setChildCareError(true);
		} else {
			setChildCareError(false);
		}
		if (rsvp === '') {
			setRsvpError(true);
		} else {
			setRsvpError(false);
		}
		if (firstName === '') {
			setFirstNameError(true);
		} else {
			setFirstNameError(false);
		}
		if (lastName === '') {
			setLastNameError(true);
		} else {
			setLastNameError(false);
		}
		if (!validateEmail(email)) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
		if (plusOneToggle && plusOneName === '') {
			setPlusOneError(true);
		} else {
			setPlusOneError(false);
		}

		if (
			(children && childCare === '') ||
			rsvp === '' ||
			firstName === '' ||
			lastName === '' ||
			(plusOneToggle && plusOneName === '') ||
			!validateEmail(email)
		) {
			return true;
		} else {
			return false;
		}
	}

	// const handlePlusOne = () => {
	// 	let hasPlusOne = internalGuest?.plus_ones.length === 1;
	// 	let noPlusOne = internalGuest?.plus_ones?.length === 0;
	// 	let plusOneId = internalGuest?.plus_ones[0]?.id;

	// 	if (rsvp === null || rsvp === 'no') {
	// 		progressFlow(rsvp);
	// 		setPlusOneToggle(false);
	// 	} else if (noPlusOne && plusOneToggle) {
	// 		// createPlusOne({ name: plusOneName||  guest_id: internalGuest.id });
	// 	} else if (hasPlusOne && plusOneToggle) {
	// 		// updatePlusOne(plusOneId, { name: plusOneName });
	// 	} else if (hasPlusOne && !plusOneToggle) {
	// 		// deletePlusOne(plusOneId);
	// 	} else {
	// 		return;
	// 	}
	// };

	function handleContinue(e) {
		e.preventDefault();
		let error = checkForErrors();
		if (!error) {
			if (rsvp === 'no') {
				setSubmitRsvpDecline(true);
			} else {
				setSubmitRsvpDecline(false);
				// updateGuest(internalGuest.id, {
				// 	first_name: firstName,
				// 	last_name: lastName,
				// 	email: email,
				// 	rsvp: rsvp,
				// });

				let data = {
					first_name: firstName,
					last_name: lastName,
					email: email,
					rsvp: rsvp,
					kids: children ? childList : [],
					plus_ones: plusOneName
						? [
								{
									id: null,
									name: plusOneName,
									lodging_id: null,
									team_id: null,
								},
						  ]
						: [],
				};

				setInternalGuest({ ...internalGuest, ...data });

				progressFlow(rsvp);
				window.scrollTo(0, 0);
			}
		}
	}

	return (
		<ContactInfoSection>
			{submitRsvpDecline && (
				<Confirmation
					submitRsvpDecline={submitRsvpDecline}
					setSubmitRsvpDecline={setSubmitRsvpDecline}
					rsvp={rsvp}
					progressFlow={progressFlow}
				/>
			)}
			<div className='heading'>
				Hello {internalGuest?.first_name || 'No User'}, <br /> we found your
				reservation!
			</div>
			<p className='main-sub-heading'> Please update the information below</p>
			<RsvpContainer>
				<div className='sub-heading'>Will you be attending the wedding?</div>
				<FormControl
					sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}
					error={rsvpError}
					required
				>
					<InputLabel id='rsvp-label'>Please select</InputLabel>
					<Select
						labelId='rsvp-label'
						label='Please Select'
						onChange={handleRsvpChange}
						defaultValue={internalGuest?.rsvp ?? ''}
						required
					>
						<MenuItem value={'yes'}>Yes</MenuItem>
						<MenuItem value={'no'}>No</MenuItem>
					</Select>
					{rsvpError && (
						<FormHelperText>Please select an option</FormHelperText>
					)}
				</FormControl>
			</RsvpContainer>
			<Form noValidate autoComplete='off' onSubmit={(e) => handleContinue(e)}>
				<MainDetailsSection
					internalGuest={internalGuest}
					setLastName={setLastName}
					setFirstName={setFirstName}
					setEmail={setEmail}
					firstNameError={firstNameError}
					lastNameError={lastNameError}
					emailError={emailError}
				/>
				{rsvp === 'yes' && (
					<div>
						{internalGuest.plus_one_count !== 0 && (
							<ToggleContainer>
								<div>
									<div className='sub-heading'>
										Your rsvp includes a plus one. Will you be bringing
										somebody?
									</div>
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
									<TextField
										sx={{ width: 300 }}
										id='plus-one-input'
										label='Full Name'
										required={false}
										type='text'
										defaultValue={internalGuest?.plus_ones[0]?.name}
										onChange={(e) => setPlusOneName(e.target.value)}
										error={plusOneError}
										helperText={plusOneError && 'Name is required'}
									/>
								</InputContainer>
							</ContactFeild>
						)}

						<ToggleContainer>
							<div className='sub-heading'>
								Do you have any children in your party?
							</div>

							<Toggle
								toggleActive={children}
								onChange={() => setChildren(!children)}
							/>
						</ToggleContainer>
						{children && (
							<ChildSection
								internalGuest={internalGuest}
								childList={childList}
								setChildList={setChildList}
								childCare={childCare}
								setChildCare={setChildCare}
								childCareError={childCareError}
							/>
						)}
					</div>
				)}

				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<SubmitButton type='submit'>Continue</SubmitButton>
				</ButtonContainer>
			</Form>
		</ContactInfoSection>
	);
}
