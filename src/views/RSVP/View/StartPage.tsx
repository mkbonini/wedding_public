/**
 * eslint-disable @typescript-eslint/no-unused-vars
 *
 * @format
 */

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
import { getGuests, getSelectedGuest } from '../Model';
import TextField from '@mui/material/TextField';
import { GuestContext } from '../../../context/GuestContext';

export default function StartPage({ progressFlow }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [displayError, setDisplayError] = useState(false);
	const [loaded, setLoaded] = useState(true);
	const [guestList, setGuestList] = useState<any>([]);
	const { setGuest } = useContext<any>(GuestContext);

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

	function handleClick() {
		setLoaded(false);
		getSelectedGuestInfo().then(function (result) {
			if (!!result) {
				progressFlow();
				setDisplayError(false);
				setLoaded(true);
			} else {
				setDisplayError(true);
				setLoaded(true);
			}
		});
	}

	const hideRsvp = false;
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
								<p>Enter your full name below to find your invitation</p>
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
