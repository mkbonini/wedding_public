/** @format */
import { useEffect, useState, useContext } from 'react';
import {
	Heading,
	ButtonContainer,
	ErrorMessage,
	StartPageContainer,
	Title,
} from '../styled-components';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import { getGuests, getSelectedGuest, createGuest } from '../Model';
import TextField from '@mui/material/TextField';
import { GuestContext } from '../../../context/GuestContext';

export default function StartPage({ progressFlow }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);
	const [loaded, setLoaded] = useState(true);
	const [guestList, setGuestList] = useState<any>([]);
	const { setGuest } = useContext<any>(GuestContext);

	// const hideRsvp = window.location.search === '?beta' ? false : true;
	const hideRsvp = false;

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let guestResult = await getGuests();
			setGuestList(guestResult);
		})();
		return () => controller?.abort();
	}, []);

	function editSearchTerm(e) {
		let term = e.target.value.trim().toLowerCase();
		setSearchTerm(term);
	}

	async function getSelectedGuestInfo() {
		let foundGuest = guestList?.find((guest) =>
			searchTerm.includes(guest.name.toLowerCase())
		);
		if (!!foundGuest) {
			let promise = new Promise((resolve) => {
				resolve(getSelectedGuest(foundGuest?.guest_id));
			});
			let result = await promise;
			setGuest(result);
			return result;
		}
	}

	function getGuestName() {
		let guestName = searchTerm.split(" ");
		if (guestName.length === 2) {
			// let promise = new Promise((resolve) => {
			// 	resolve(getSelectedGuest(foundGuest?.guest_id));
			// });
			return ({first_name: guestName[0], last_name: guestName[1], plus_one_count: 1});
		}
	}



	function handleClick() {
		setLoaded(false);
		getSelectedGuestInfo().then(function (result) {
			if (!!result) {
				progressFlow();
				setDisplayError(false);
				setLoaded(true);
			} else {
				// Change to createUser for public demo version
				// setDisplayError(true);
				// setLoaded(true);
				let guestName = getGuestName();
				let newGuest = createGuest(guestName);
				setGuest(newGuest);
				progressFlow();
				setDisplayError(false);
				setLoaded(true);
			}
		});
	}

	return (
		<>
			{loaded ? (
				<StartPageContainer>
					{hideRsvp ? (
						<Title>
							<h1>
								Hello there!
								<br />
								The RSVP page
								<br /> is coming soon
								<br />
							</h1>
						</Title>
					) : (
						<>
							<Heading>
								<h1>RSVP</h1>
								<p style={{textAlign:"center"}}>This is a demo, searching a new name will create an invite.<br/> Searching the name of an existing guest or their plus one <br/>will bring up that invite.</p>
							</Heading>
							<TextField
								label='Search Your Name'
								onChange={(e) => editSearchTerm(e)}
								type='text'
								required
								error={displayError}
								fullWidth
							/>
							{displayError && (
								<ErrorMessage>
									oh no! we’re having trouble finding your invite. Make sure the
									spelling is correct and if the problem persists contact m+m at
									mikemiwha@gmail.com
								</ErrorMessage>
							)}
							<ButtonContainer>
								<Button onClick={() => handleClick()} text='Find My Invite' />
							</ButtonContainer>
						</>
					)}
				</StartPageContainer>
			) : (
				<Loading />
			)}
		</>
	);
}
