/** @format */

import { useState } from 'react';
import Stepper from '../../../components/Stepper';
import styled from 'styled-components';
import ButtonSecondary from '../../../components/ButtonSecondary';
import Button from '../../../components/Button';
import TextField from '@mui/material/TextField';
import Toggle from '../../../components/Toggle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AdditionalPageContainer = styled.div`
	margin-top: 10rem;
`;

const StepperContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0rem 6rem 0rem;
	gap: 20px;
`;

const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem 0rem 0rem;
`;

const LineBreak = styled.div`
	height: 1px;
	background-color: whitesmoke;
	width: 100%;
	max-width: '800px';
	margin: 1rem 0rem;
`;

const ContentContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	h1 {
		font-size: 20px;
		text-align: center;
	}
	h2 {
		font-size: 18px;
		margin: 1rem 0rem;
		font-family: 'Gilroy-SemiBold';
		color: #343232;
		text-align: start;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Nunito';
		color: #343232;
	}
`;

const SectionBreaks = styled.div`
	margin: 10px 0px;
	width: 100%;
`;
export default function StartPage({ regressFlow, progressFlow }) {
	const [breakfast, setBreakfast] = useState(false);
	const [dodgeball, setDodgeball] = useState(false);
	const [arrivalDay, setArrivalDay] = useState('');

	const handleArrivalChange = (event: SelectChangeEvent) => {
		setArrivalDay(event.target.value as string);
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
						sx={{ maxWidth: 350, width: '100%' }}
						id='outlined-multiline-flexible'
						label='Any Allergies?'
						multiline
						maxRows={4}
					/>
				</SectionBreaks>
				<SectionBreaks>
					<ToggleContainer>
						<h2>Do you want breakfast on Sunday morning?</h2>
						<Toggle
							toggleActive={breakfast}
							onChange={() => setBreakfast(!breakfast)}
						/>
					</ToggleContainer>
				</SectionBreaks>
				<LineBreak />
				<SectionBreaks>
					<h2>What day will you be arriving?</h2>
					<FormControl sx={{ m: 1, maxWidth: 260, margin: 0, width: '100%' }}>
						<InputLabel id='day-label'>Select a day</InputLabel>
						<Select
							labelId='day-label'
							label='Select a day'
							onChange={handleArrivalChange}
							value={arrivalDay}
						>
							<MenuItem value={'Friday'}>Friday</MenuItem>
							<MenuItem value={'Saturday'}>Saturday</MenuItem>
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
						<strong>17 years old or older</strong>. There is however a section
						of the gym that overlooks the court and those who are interested in
						hanging out but not playing can still participate by watching and
						cheering for a team.
					</p>
				</SectionBreaks>
				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => progressFlow()} text='Submit My RSVP' />
				</ButtonContainer>
			</ContentContainer>
		</AdditionalPageContainer>
	);
}
