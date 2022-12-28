/** @format */

import { useState } from 'react';
import Stepper from '../../../../components/Stepper';
import Toggle from '../../../../components/Toggle';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import { handleInputRecieved } from '../../utils';
import {
	ContactFeild,
	FormFeild, //delete
	ImageContainer,
	ContactInfoSection,
	Form,
	AttendingContent,
	ButtonContainer,
	InputContainer,
	ToggleContainer,
	KidsContainer,
	AddChildLink,
} from './styled-components';
import StandardTextField from '../../../../components/StandardTextField';
import Button from '../../../../components/Button';
import ButtonSecondary from '../../../../components/ButtonSecondary';

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
			<ContactInfoSection>
				<h1>
					Hello {selectedGuest?.first_name || 'No User'}, <br /> we found your
					reservation!
				</h1>
				<p> Please update the information below</p>

				<Form onSubmit={(event) => handleSubmit(event)}>
					<h2>Your details:</h2>
					<ContactFeild>
						<InputContainer>
							<StandardTextField
								label='First Name'
								required={true}
								type='text'
								defaultValue={selectedGuest?.first_name}
							/>
						</InputContainer>
						<InputContainer>
							<StandardTextField
								label='Last Name'
								required={true}
								type='text'
								defaultValue={selectedGuest?.last_name}
							/>
						</InputContainer>
						<InputContainer>
							<StandardTextField
								label='Email'
								required={true}
								type='text'
								defaultValue={selectedGuest?.email}
							/>
						</InputContainer>
					</ContactFeild>

					<ToggleContainer>
						<h2>Will you be attending the wedding?</h2>
						<Toggle
							toggleActive={!declineRSVP}
							onChange={() => setDeclineRSVP(!declineRSVP)}
						/>
					</ToggleContainer>

					{!declineRSVP && (
						<AttendingContent child={children} plusOne={plusOne}>
							<ToggleContainer>
								<div>
									<h2>
										Your reservation includes a plus one. Will you be bringing
										somebody?
									</h2>
								</div>
								<Toggle
									toggleActive={plusOne}
									onChange={() => setPlusOne(!plusOne)}
								/>
							</ToggleContainer>
							{plusOne && (
								<ContactFeild className='plus-one-field'>
									<p>If yes, please enter their name below</p>
									<InputContainer className='no-gap'>
										<StandardTextField
											label='Full Name'
											required={false}
											type='text'
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
											children (under 8 years old and outside of immediate
											family) not be present during the ceremony and dinner.
											This means either one parent will need to step out during
											these times, or we can help coordinate some sort of on
											site sitter situation. This expense would need to be paid
											for by the parents however.
										</p>
									</div>
									<h2>
										Who will watch the children during the ceremony & dinner?
									</h2>
									<FormFeild>
										<FormControl
											variant='standard'
											sx={{ m: 1, maxWidth: 250, margin: 0 }}
										>
											<InputLabel id='child-care-label'>
												Please select an option
											</InputLabel>
											<Select
												labelId='child-care-label'
												onChange={() => {}}
												label='Please select an option'
											>
												<MenuItem value={'parents'}>A Parent</MenuItem>
												<MenuItem value={'sitter service'}>
													Sitters Service
												</MenuItem>
											</Select>
										</FormControl>
									</FormFeild>

									<KidsContainer>
										<h2 className='enter-info'>
											Please enter their information below
										</h2>

										{childList.map((element, index) => (
											<ContactFeild>
												<FormFeild>
													<InputContainer className='no-gap'>
														<StandardTextField
															label='Full Name'
															required={false}
															type='text'
															onChange={(e) => handleChildInputChange(index, e)}
															defaultValue={element.name || ''}
														/>
													</InputContainer>
												</FormFeild>
												<FormFeild>
													<InputContainer>
														<TextField
															sx={{ maxWidth: 100 }}
															label='Age'
															required={false}
															type='number'
															variant='standard'
															onChange={(e) => handleChildInputChange(index, e)}
															defaultValue={element.age || ''}
														/>
													</InputContainer>
												</FormFeild>

												<FormFeild>
													<FormControl
														variant='standard'
														sx={{ m: 1, minWidth: 250, margin: 0 }}
													>
														<InputLabel id='child-sleeping-label'>
															Do they need their own bed?
														</InputLabel>
														<Select
															labelId='child-sleeping-label'
															onChange={() => {}}
															label='Do they need their own bed?'
														>
															<MenuItem value='yes'>Yes</MenuItem>
															<MenuItem value='no'>No</MenuItem>
														</Select>
													</FormControl>
												</FormFeild>

												<ImageContainer
													className='delete-button'
													onClick={() => removeChildFormField(index)}
												>
													<FaTrashAlt />
												</ImageContainer>
											</ContactFeild>
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
						</AttendingContent>
					)}

					<ButtonContainer>
						<ButtonSecondary onClick={() => regressFlow()} text='Back' />
						<Button onClick={() => determineProgressFlow()} text='Continue' />
					</ButtonContainer>
				</Form>
			</ContactInfoSection>
		</>
	);
}
