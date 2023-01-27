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
import { checkForErrors } from './utils';
import { getSelectedGuest } from '../../Model';
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
	selectedGuest,
}) {
	const [currentGuest, setCurrentGuest] = useState(selectedGuest);
	const [rsvp, setRsvp] = useState(currentGuest?.rsvp ?? '');
	const [plusOneName, setPlusOneName] = useState(
		currentGuest?.plus_ones[0]?.name ?? ''
	);
	const [plusOneToggle, setPlusOneToggle] = useState(
		currentGuest?.plus_ones[0] ? true : false
	);
	const [children, setChildren] = useState(
		currentGuest?.kids?.length > 0 ? true : false
	);

	const [submitRsvpDecline, setSubmitRsvpDecline] = useState(false);

	const [firstName, setFirstName] = useState(currentGuest?.first_name ?? '');
	const [lastName, setLastName] = useState(currentGuest?.last_name ?? '');
	const [email, setEmail] = useState(currentGuest?.email ?? '');

	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [rsvpError, setRsvpError] = useState(false);
	const [plusOneError, setPlusOneError] = useState(false);
	const [childCareError, setChildCareError] = useState(false);

	const [childCare, setChildCare] = useState(
		currentGuest?.kids[0]?.child_care ?? ''
	);
	const [childList, setChildList] = useState(
		currentGuest?.kids?.length > 0
			? currentGuest?.kids
			: [
					{
						name: '',
						age: '',
						needs_bed: '',
						guest_id: currentGuest.id,
						child_care: childCare,
						team_id: 0,
					},
			  ]
	);

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!loaded) {
			getCurrentGuestInfo();
		}
	}, [currentGuest]);

	async function getCurrentGuestInfo() {
		let promise = new Promise((resolve) => {
			resolve(getSelectedGuest(selectedGuest.id));
		});
		let result = await promise;
		console.log('result from getCurrentGuestInfo', result);
		setCurrentGuest(result);
		if (result) {
			setLoaded(true);
		}
	}

	const handleRsvpChange = (event) => {
		setRsvp(event.target.value);
	};

	const handlePlusOne = () => {
		let hasPlusOne = currentGuest?.plus_ones.length === 1;
		let noPlusOne = currentGuest?.plus_ones?.length === 0;
		let plusOneId = currentGuest?.plus_ones[0]?.id;

		if (rsvp === null || rsvp === 'no') {
			progressFlow(rsvp);
			setPlusOneToggle(false);
		} else if (noPlusOne && plusOneToggle) {
			createPlusOne({ name: plusOneName, guest_id: currentGuest.id });
		} else if (hasPlusOne && plusOneToggle) {
			updatePlusOne(plusOneId, { name: plusOneName });
		} else if (hasPlusOne && !plusOneToggle) {
			deletePlusOne(plusOneId);
		} else {
			return;
		}
	};

	// function updateInternalData() {
	// 	let data = {
	// 		first_name: firstName,
	// 		last_name: lastName,
	// 		email: email,
	// 		rsvp: rsvp,
	// 		kids: children ? childList : [],
	// 		plus_ones: plusOneName
	// 			? [
	// 					{
	// 						id: null,
	// 						name: plusOneName,
	// 						lodging_id: null,
	// 						team_id: null,
	// 					},
	// 			  ]
	// 			: [],
	// 	};
	// 	setCurrentGuest({ ...currentGuest, ...data });
	// }

	function updateDatabase() {
		updateGuest(currentGuest.id, {
			first_name: firstName,
			last_name: lastName,
			email: email,
			rsvp: rsvp,
		});
		if (childList.length > 0 && childList[0].name !== '') {
			createKids(childList);
		}
		if (currentGuest.plus_one_count !== 0) {
			handlePlusOne();
		}
	}

	function handleContinue(e) {
		e.preventDefault();
		let error = checkForErrors({
			children,
			childCare,
			setChildCareError,
			setRsvpError,
			setFirstNameError,
			setLastNameError,
			rsvp,
			firstName,
			lastName,
			email,
			setEmailError,
			plusOneToggle,
			plusOneName,
			setPlusOneError,
		});

		if (!error) {
			if (rsvp === 'no') {
				setSubmitRsvpDecline(true);
			} else {
				setSubmitRsvpDecline(false);
				// updateInternalData();
				updateDatabase();
				progressFlow(rsvp);
				window.scrollTo(0, 0);
			}
		}
	}

	console.log(loaded, 'loaded');

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
				Hello {currentGuest?.first_name || 'No User'}, <br /> we found your
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
						defaultValue={currentGuest?.rsvp ?? ''}
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
					currentGuest={currentGuest}
					setLastName={setLastName}
					setFirstName={setFirstName}
					setEmail={setEmail}
					firstNameError={firstNameError}
					lastNameError={lastNameError}
					emailError={emailError}
					selectedGuest={selectedGuest}
					loaded={loaded}
				/>
				{rsvp === 'yes' && (
					<div>
						{currentGuest.plus_one_count !== 0 && (
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
										defaultValue={
											loaded
												? currentGuest?.plus_ones[0]?.name
												: selectedGuest?.plus_ones[0]?.name
										}
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
								currentGuest={currentGuest}
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
