/** @format */
import { useState } from 'react';

import { Input, Name, NamesContainer, Heading } from '../styled-components';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
}) {
	const [searchTerm, setSearchTerm] = useState('');

	function editSearchTerm(e: any) {
		setSearchTerm(e.target.value);
	}

	function findGuest() {
		console.log(searchTerm.split(' '));
		let foundGuest = guestList.find((guest: any) =>
			searchTerm.includes(guest.first_name)
		);
		setSelectedGuest(foundGuest);
	}
	function handleClick() {
		findGuest();
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
			<Heading>
				<h1>RSVP</h1> <p>Enter your name below and select your name.</p>
			</Heading>
			<Input
				type='text'
				placeholder='Search Your Name'
				onChange={(e) => editSearchTerm(e)}
			/>
			{/* <NamesContainer>
				{filteredNames &&
					filteredNames?.map((guest, i) => {
						return (
							<Name key={i} onClick={() => handleClick(guest)}>
								<p>{`${guest.first_name} ${guest.last_name}`}</p>
							</Name>
						);
					})}
			</NamesContainer> */}
			<button onClick={() => handleClick()}>Find my reservation</button>
		</>
	);
}
