/** @format */

import styled from 'styled-components';

export default function ConfirmPage({ declinedRSVP }) {
	const ConfirmationPage = styled.div`
		margin-top: 5rem;
		max-width: 600px;
		min-height: 75vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			text-transform: uppercase;
			font-family: 'Gilroy-Bold';
			font-size: 60px;
			text-align: center;
			margin: 0;
			padding: 0;
		}
		h2 {
			font-family: 'Nunito';
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
			<h2>
				{declinedRSVP
					? `We're sad we won't see you there! You will be missed.`
					: `We can't wait to celebrate with you!`}
			</h2>
			<p>
				Expect to receive a confirmation email with details of your RSVP. You
				can also always come back to this RSVP portal (so long as the deadline
				has not passed), and update your rsvp as needed.
			</p>
		</ConfirmationPage>
	);
}
