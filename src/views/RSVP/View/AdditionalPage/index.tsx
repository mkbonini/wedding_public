/** @format */

import { useState } from 'react';
import Stepper from '../../../../components/Stepper';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import TextField from '@mui/material/TextField';
import Toggle from '../../../../components/Toggle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getFormValues } from './utils';
import { updateGuest } from '../../Model';
import {
	ButtonContainer,
	AdditionalPageContainer,
	StepperContainer,
	ContentContainer,
	SectionBreaks,
	LineBreak,
	ToggleContainer,
} from './styled-components';

export default function StartPage({
	regressFlow,
	progressFlow,
	selectedGuest,
}) {
	// const [breakfast, setBreakfast] = useState('no');
	const [dodgeball, setDodgeball] = useState(false);
	const [arrivalDate, setArrivalDate] = useState('');

	const handleArrivalChange = (event: SelectChangeEvent) => {
		setArrivalDate(event.target.value as string);
	};

	// const handleBreakfastChange = (event: SelectChangeEvent) => {
	// 	if (breakfast === 'no') {
	// 		setBreakfast('yes');
	// 	} else {
	// 		setBreakfast('no');
	// 	}
	// };

	const handleSubmit = () => {
		let formValues = getFormValues();
		updateGuest(selectedGuest.id, {
			...formValues,
			arrival_date: arrivalDate,
		});
		progressFlow();
	};

	return (
		<AdditionalPageContainer>
			<StepperContainer>
				<Stepper step={4} />
			</StepperContainer>

			<ContentContainer>
				<SectionBreaks>
					<h2>Important Information About Meals</h2>
					<p className='description'>
						We will provide dinner on Friday evening (think grilling / bbq),
						dinner Saturday evening (Reception Dinner), and breakfast on Sunday
						Morning. For Saturday morning/lunch we recommend guests hit the town
						in Bailey or Conifer for a meal, though we will also have some
						simple food out for people to enjoy incase they are unable to get to
						town. For Sunday breakfast we are asking for a $5 dollar donation.
						However if you do not want breakfast you can opt out below as well.
					</p>
				</SectionBreaks>
				<SectionBreaks>
					<h2>
						Do you or anyone in your party have any food allergies that we
						should be aware of?
					</h2>
					<p>If yes, please describe below otherwise leave blank</p>
					<TextField
						id='allergy-text-feild'
						sx={{ maxWidth: 400, width: '100%' }}
						label='Any Allergies?'
						multiline
						maxRows={4}
						defaultValue={selectedGuest.diet ? selectedGuest.diet : ''}
					/>
				</SectionBreaks>
				{/* <SectionBreaks>
					<ToggleContainer>
						<h2>Do you want breakfast on Sunday morning?</h2>
						<Toggle toggleActive={breakfast} onChange={handleBreakfastChange} />
					</ToggleContainer>
				</SectionBreaks> */}
				<LineBreak />
				<SectionBreaks>
					<h2>What day will you be arriving?</h2>
					<FormControl sx={{ m: 1, maxWidth: 260, margin: 0, width: '100%' }}>
						<InputLabel id='day-label'>Select a day</InputLabel>
						<Select
							labelId='day-label'
							label='Select a day'
							onChange={handleArrivalChange}
							defaultValue={
								selectedGuest.arrival_date
									? selectedGuest.arrival_date
									: arrivalDate
							}
						>
							<MenuItem value={'friday'}>Friday</MenuItem>
							<MenuItem value={'saturday'}>Saturday</MenuItem>
						</Select>
					</FormControl>
				</SectionBreaks>
				<SectionBreaks>
					<ToggleContainer>
						<h2>
							Do you or anybody in your party wish to participate in the
							dodgeball tournament?
						</h2>
						<Toggle
							toggleActive={dodgeball}
							onChange={() => setDodgeball(!dodgeball)}
						/>
					</ToggleContainer>
					<p>
						The dodgeball tournament will be held on{' '}
						<strong>Friday evening</strong>. Due to the nature of the game, we
						are currently only allowing contestants who are{' '}
						<strong>17 years old or older to compete</strong>. There is however
						a section of the gym that overlooks the court and those who are
						interested in hanging out but not playing can still participate by
						watching and cheering for a team.
					</p>
				</SectionBreaks>
				<SectionBreaks>
					<p>Please add any participants name(s) below</p>
					<TextField
						sx={{ maxWidth: 400, width: '100%' }}
						id='dodgeball-participants'
						label='Participant Names'
						multiline
						maxRows={4}
					/>
				</SectionBreaks>

				<SectionBreaks>
					<h2>Any final questions or comments?</h2>
					<TextField
						sx={{ maxWidth: 700, width: '100%' }}
						id='questions-comments'
						label='Comments or Questions'
						multiline
						maxRows={4}
						defaultValue={selectedGuest.comments && selectedGuest.comments}
					/>
				</SectionBreaks>

				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => handleSubmit()} text='Submit My RSVP' />
				</ButtonContainer>
			</ContentContainer>
		</AdditionalPageContainer>
	);
}
