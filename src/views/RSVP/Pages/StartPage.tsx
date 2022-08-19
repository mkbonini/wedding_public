/** @format */

import {
	RsvpTitle,
	SignUpForm,
	RsvpContainer,
	Input,
	Name,
	NamesContainer,
	BackgroundAccent,
	Accent,
} from '../styled-components';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { editSearchTerm } from '../utils';

export default function StartPage({
	selectedGuest,
	setSearchTerm,
	setCode,
	handleGuestDeselection,
	handleGuestSelection,
	verified,
	verifyGuest,
	guestList,
	filterNames,
	setGuestInputRecieved,
	error,
}) {
	return (
		<>
			<RsvpContainer>
				<Breadcrumbs location={'rsvp'} />
				<SignUpForm>
					<RsvpTitle>
						<h1>RSVP</h1>
						<Accent />
						<h2>Deadline is June 22, 2023</h2>
						{selectedGuest === null ? (
							<p>Enter your name below to find your invite.</p>
						) : (
							<p>You can find your verification code on your invite</p>
						)}
					</RsvpTitle>
					{selectedGuest === null && (
						<>
							<Input
								type='text'
								placeholder='Search Your Name'
								onChange={(e) => editSearchTerm(e, setSearchTerm)}
							/>
							<NamesContainer>
								{filterNames.length > 0 &&
									filterNames?.map((guest, i) => {
										return (
											<Name key={i} onClick={() => handleGuestSelection(guest)}>
												<p>{`${guest.first_name} ${guest.last_name}`}</p>
											</Name>
										);
									})}
							</NamesContainer>
						</>
					)}
					{selectedGuest !== null && !verified && (
						<>
							{error && <p style={{ color: 'red' }}>Error: Code is invalid</p>}
							<Input
								type='text'
								placeholder='Verification Code'
								onChange={(e) => setCode(e.target.value)}
							/>
							<button
								onClick={(e) => verifyGuest(e)}
								style={{ maxWidth: '200px', marginTop: '20px' }}
							>
								Submit
							</button>
							<button
								onClick={(e) => handleGuestDeselection()}
								style={{
									maxWidth: '200px',
									marginTop: '10px',
									backgroundColor: 'white',
									color: 'black',
									boxShadow: '1px 2px 9px lightgrey',
								}}
							>
								Back
							</button>
						</>
					)}

					{selectedGuest !== null && verified && (
						<div style={{ paddingBottom: '20px' }}>
							<span>
								You are RSVP'ing as{' '}
								<span style={{ fontWeight: 800 }}>
									{`${selectedGuest.first_name} ${selectedGuest.last_name}`}
								</span>
								. To deselect and return to search, click{' '}
							</span>
							<span
								onClick={() => handleGuestDeselection()}
								style={{ fontWeight: 800 }}
							>
								back
							</span>
						</div>
					)}
				</SignUpForm>
			</RsvpContainer>
			<BackgroundAccent />
		</>
	);
}
