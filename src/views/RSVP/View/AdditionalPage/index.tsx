/** @format */

import { useEffect, useState } from 'react';
import Stepper from '../../../../components/Stepper';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import TextField from '@mui/material/TextField';
import Toggle from '../../../../components/Toggle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import { getFormValues } from './utils';
import { updateDodgeball, updateGuest } from '../../Model';
import {
	ButtonContainer,
	AdditionalPageContainer,
	StepperContainer,
	ContentContainer,
	SectionBreaks,
	LineBreak,
	ToggleContainer,
	SubmitButton,
	CheckboxContainer,
} from './styled-components';

export default function StartPage({
	regressFlow,
	progressFlow,
	selectedGuest,
	setSelectedGuest,
}) {
	const [breakfast, setBreakfast] = useState(selectedGuest?.breakfast ?? '');
	const [dodgeball, setDodgeball] = useState(
		selectedGuest?.team_id === 1 ? true : false
	);
	const [arrivalDate, setArrivalDate] = useState(
		selectedGuest?.arrival_date ?? ''
	);
	const [arrivalDropdownError, setArrivalDropdownError] = useState(false);
	const [dodgeballParticipants, setDodgeballParticipants] = useState<any>([]);

	const handleArrivalChange = (event: SelectChangeEvent) => {
		setArrivalDate(event.target.value as string);
	};

	const handleBreakfastChange = (event: SelectChangeEvent) => {
		setBreakfast(event.target.value);
	};

	const checkForErrors = () => {
		setArrivalDropdownError(false);
		if (arrivalDate === '') {
			setArrivalDropdownError(true);
		}
		if (arrivalDate === '') return true;
	};

	const handleRegress = () => {
		let formValues = getFormValues();
		setSelectedGuest({
			...selectedGuest,
			...formValues,
			arrival_date: arrivalDate,
			breakfast: breakfast,
		});

		regressFlow();
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let error = checkForErrors();
		if (!error) {
			// let formValues = getFormValues();
			// updateGuest(selectedGuest.id, {
			// 	...formValues,
			// 	arrival_date: arrivalDate,
			// 	breakfast: breakfast,
			// });

			if (dodgeballParticipants) {
				// updateDodgeball({ name: dodgeballParticipants });
			}
			progressFlow();
			window.scrollTo(0, 0);
		}
	};

	const getPartyList = () => {
		if (selectedGuest) {
			let guestsOverSeventeen;
			let guest = selectedGuest?.full_name;

			let plusOne = selectedGuest?.plus_ones[0]?.name;

			let children = selectedGuest?.kids;
			let childrenEligible = children?.filter((child) => child?.age >= 17);
			let childNames = childrenEligible?.map((child) => child?.name);

			if (plusOne === undefined || plusOne === '') {
				guestsOverSeventeen = [...childNames, guest];
			} else {
				guestsOverSeventeen = [plusOne, ...childNames, guest];
			}
			return guestsOverSeventeen;
		} else {
			return [];
		}
	};

	const handleCheckmarks = (e) => {
		const exists = dodgeballParticipants.find(
			(guest) => guest === e.target.name
		);
		if (exists) {
			let result = dodgeballParticipants.filter(
				(guest) => guest !== e.target.name
			);
			setDodgeballParticipants(result);
		} else {
			setDodgeballParticipants([...dodgeballParticipants, e.target.name]);
		}
	};

	console.log(selectedGuest, 'selectedGuest from additional');

	return (
		<AdditionalPageContainer>
			<StepperContainer>
				<Stepper step={4} />
			</StepperContainer>
			<ContentContainer>
				<SectionBreaks>
					<div className='sub-heading'>Important Information About Meals</div>
					<p className='description'>
						We will provide dinner on Friday evening (think grilling / bbq),
						dinner Saturday evening (Reception Dinner), and breakfast on Sunday
						Morning. For Saturday morning/lunch we recommend guests hit the town
						in Bailey or Conifer for a meal, though we will also have some
						simple food out for people to enjoy incase they are unable to get to
						town. <br />
						<br />
						For Sunday breakfast we are asking for a $5 dollar donation. However
						if you do not want breakfast you can opt out below as well.
					</p>
				</SectionBreaks>
				<form noValidate autoComplete='off' onSubmit={handleSubmit}>
					<SectionBreaks>
						<div className='sub-heading'>
							Do you or anyone in your party have any food allergies that we
							should be aware of?
						</div>
						<p>If yes, please describe below otherwise leave blank</p>
						<TextField
							id='allergy-text-feild'
							sx={{ maxWidth: 400, width: '100%' }}
							label='Any Allergies?'
							multiline
							maxRows={4}
							defaultValue={selectedGuest?.diet ?? ''}
						/>
					</SectionBreaks>
					<SectionBreaks>
						<div className='sub-heading'>
							Do you and your party want breakfast on Sunday morning?
						</div>
						<FormControl sx={{ m: 1, maxWidth: 200, margin: 0, width: '100%' }}>
							<InputLabel id='breakfast-label'>Please select</InputLabel>
							<Select
								labelId='breakfast-label'
								label='Please Select'
								onChange={handleBreakfastChange}
								defaultValue={selectedGuest?.breakfast ?? ''}
								required
							>
								<MenuItem value={'yes'}>Yes</MenuItem>
								<MenuItem value={'no'}>No</MenuItem>
							</Select>
						</FormControl>
					</SectionBreaks>
					<LineBreak />
					<SectionBreaks>
						<div className='sub-heading'>What day will you be arriving?</div>
						<FormControl
							sx={{ m: 1, maxWidth: 260, margin: 0, width: '100%' }}
							error={arrivalDropdownError}
							required
						>
							<InputLabel id='day-label'>Select a day</InputLabel>
							<Select
								labelId='day-label'
								label='Select a day'
								onChange={handleArrivalChange}
								defaultValue={selectedGuest.arrival_date ?? ''}
							>
								<MenuItem value={'friday'}>Friday</MenuItem>
								<MenuItem value={'saturday'}>Saturday</MenuItem>
							</Select>
							{arrivalDropdownError && (
								<FormHelperText>Please select an option</FormHelperText>
							)}
						</FormControl>
					</SectionBreaks>
					<SectionBreaks className='dodgeball-section'>
						<ToggleContainer>
							<div className='sub-heading'>
								Do you or anybody in your party wish to participate in the
								dodgeball tournament?
							</div>
							<Toggle
								toggleActive={dodgeball}
								onChange={() => setDodgeball(!dodgeball)}
							/>
						</ToggleContainer>
						<p>
							The dodgeball tournament will be held on{' '}
							<strong>Friday evening</strong>. Due to the nature of the game, we
							are currently only allowing contestants who are{' '}
							<strong>17 years old or older to compete</strong>. There is
							however a section of the gym that overlooks the court and those
							who are interested in hanging out but not playing can still
							participate by watching and cheering for a team.
						</p>
					</SectionBreaks>
					{dodgeball && (
						<SectionBreaks className='checkmark-section'>
							<h3>Select those who wish to participate</h3>
							{getPartyList()?.map((guest, index) => {
								return (
									<CheckboxContainer key={`checkbox-${index}`}>
										<Checkbox
											onChange={handleCheckmarks}
											inputProps={{ name: guest }}
										/>
										{guest}
									</CheckboxContainer>
								);
							})}
						</SectionBreaks>
					)}

					<SectionBreaks>
						<div className='sub-heading'>Any final questions or comments?</div>
						<TextField
							sx={{ maxWidth: 700, width: '100%' }}
							id='questions-comments'
							label='Comments or Questions'
							multiline
							maxRows={4}
							defaultValue={selectedGuest.comments ?? ''}
						/>
					</SectionBreaks>

					<ButtonContainer>
						<ButtonSecondary onClick={() => handleRegress()} text='Back' />
						<SubmitButton type='submit'>Submit My Rsvp</SubmitButton>
					</ButtonContainer>
				</form>
			</ContentContainer>
		</AdditionalPageContainer>
	);
}
