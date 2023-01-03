/** @format */
import {
	ContactFeild,
	KidsContainer,
	LineBreak,
	ImageContainer,
	AddChildLink,
	InputContainer,
} from './styled-components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import StandardTextField from '../../../../components/StandardTextField';
import TextField from '@mui/material/TextField';

export default function ChildSection({
	childList,
	setChildList,
	childCare,
	setChildCare,
	internalGuest,
}) {
	let addChildFormField = (e) => {
		if (childList.length < 4) {
			setChildList([
				...childList,
				{
					name: '',
					age: '',
					needs_bed: '',
					guest_id: internalGuest.id,
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

	let handleChildInputChange = (i, e) => {
		let newChildList = [...childList];
		newChildList[i][e.target.name] = e.target.value;
		newChildList[i].child_care = childCare;
		setChildList(newChildList);
	};

	let handleChildCareChange = (e) => {
		setChildCare(e.target.value);
	};

	return (
		<ContactFeild className={`children-field`}>
			<div className='message-container'>
				<p className='title'>Important Message for Parents</p>
				<p className='description'>
					We understand that leaving the kids at home for a whole weekend might
					not be possible, and while we would love to see them during the
					weekend, we are asking that young children (under 8 years old and
					outside of immediate family) not be present during the ceremony and
					dinner. This means either one parent will need to step out during
					these times, or we can help coordinate some sort of on site sitter
					situation. This expense would need to be paid for by the parents
					however.
				</p>
			</div>
			<h2>Who will watch the children during the ceremony & dinner?</h2>

			<FormControl sx={{ m: 1, maxWidth: 250, margin: 0 }}>
				<InputLabel id='child-care-label'>Please select an option</InputLabel>
				<Select
					labelId='child-care-label'
					onChange={handleChildCareChange}
					label='Please select an option'
					value={childCare ? childCare : ''}
				>
					<MenuItem value={'guardian'}>A Parent</MenuItem>
					<MenuItem value={'sitter'}>Sitters Service</MenuItem>
				</Select>
			</FormControl>
			<KidsContainer>
				<h2 className='enter-info'>Please enter their information below</h2>
				{childList?.map((element, index) => (
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
										<InputLabel id='kid-bed-label'>Please Select</InputLabel>
										<Select
											labelId='kid-bed-label'
											label='Please Select'
											name='needs_bed'
											onChange={(e) => handleChildInputChange(index, e)}
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
			{childList?.length < 4 && (
				<AddChildLink onClick={(e) => addChildFormField(e)}>
					<FaPlus />
					Add Child
				</AddChildLink>
			)}
		</ContactFeild>
	);
}
