/** @format */

import styled from 'styled-components';
import { GuestContext } from '../../../context/GuestContext';
import { useContext } from 'react';

export default function ConfirmPage() {
	const { guest } = useContext<any>(GuestContext);
	const ConfirmationPage = styled.div`
		margin-top: 4rem;
		max-width: 600px;
		min-height: 75vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0rem 2rem;

		h1 {
			text-transform: uppercase;
			font-size: 40px;
			text-align: center;
			margin: 0;
			padding: 0;
		}
		h2 {
			text-align: center;
			font-size: 20px;
		}
		p {
			max-width: 420px;
			text-align: center;
		}
	`;
	return (
		<ConfirmationPage>
			<h1>
				Thank You <br />
				For Your RSVP
			</h1>
			{/* <h2>
				{selectedGuest.rsvp === 'no'
					? `We're sad we won't see you there! You will be missed.`
					: `We can't wait to celebrate with you!`}
			</h2> */}
			<p>
				Expect to receive a confirmation email with details of your RSVP. You
				can also always come back to this RSVP portal (so long as the deadline
				has not passed), and update your rsvp as needed.
			</p>
		</ConfirmationPage>
	);
}
