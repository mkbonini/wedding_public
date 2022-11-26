/** @format */
import { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import { Input, Heading } from '../styled-components';

export default function StartPage({
	guestList,
	setSelectedGuest,
	progressFlow,
	selectedGuest,
}) {
	useEffect(() => {
		findGuest();
	});

	const [searchTerm, setSearchTerm] = useState('');

	function editSearchTerm(e) {
		let term = e.target.value.toLowerCase();
		setSearchTerm(term);
	}

	function findGuest() {
		let foundGuest = guestList.find((guest) =>
			searchTerm.includes(
				guest.first_name.toLowerCase() + ' ' + guest.last_name.toLowerCase()
			)
		);
		setSelectedGuest(foundGuest);
	}

	function handleClick() {
		if (selectedGuest) {
			progressFlow();
		} else {
			alert('no user found');
		}
	}

	return (
		<>
			<Heading>
				<h1>RSVP</h1> <p>Enter your full name below to find your reservation</p>
			</Heading>
			<Input
				type='text'
				placeholder='Search Your Name'
				onChange={(e) => editSearchTerm(e)}
			/>
			<Button text='Find my rsvp' onClick={() => handleClick()} />
		</>
	);
}
