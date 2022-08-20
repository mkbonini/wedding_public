/** @format */
import { useState } from 'react';
import {
	Input,
	Name,
	NamesContainer,
	ParagraphText,
} from '../styled-components';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
}) {
	const [searchTerm, setSearchTerm] = useState('');

	function editSearchTerm(e: any) {
		setSearchTerm(e.target.value);
	}

	function handleClick(guest) {
		setSelectedGuest(guest);
		progressFlow();
	}

	const filteredNames =
		guestList.length > 0 &&
		guestList?.filter((guest) => {
			const fullName = `${guest?.first_name} ${guest?.last_name}`;
			if (searchTerm === '') return null;
			else if (fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
				return guest;
			} else {
				return null;
			}
		});

	return (
		<>
			<ParagraphText>Enter your name below to find your invite.</ParagraphText>
			<Input
				type='text'
				placeholder='Search Your Name'
				onChange={(e) => editSearchTerm(e)}
			/>
			<NamesContainer>
				{filteredNames &&
					filteredNames?.map((guest, i) => {
						return (
							<Name key={i} onClick={() => handleClick(guest)}>
								<p>{`${guest.first_name} ${guest.last_name}`}</p>
							</Name>
						);
					})}
			</NamesContainer>
		</>
	);
}
