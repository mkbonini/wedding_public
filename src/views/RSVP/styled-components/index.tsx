/** @format */

import styled from 'styled-components';

//Search

export const Input = styled.input`
	//delete
	height: 60px;
	width: 100%;
	border: none;
	margin-bottom: 20px;
	text-align: center;
	border: 1px solid lightgray;
	border-radius: 2px;
	max-width: 495px;
	margin-top: 10px;
	&:focus {
		outline: none;
	}
	&::placeholder {
		font-family: 'Nunito';
	}
`;

//RSVP Main
export const RsvpContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	min-height: 90vh;
	padding: 1rem;
`;

export const SignUpForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	background-color: white;

	@media only screen and (max-width: 900px) {
		min-width: unset;
		border: unset;
		padding-top: 0rem;
	}
`;

//Start Modal

export const Heading = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: unset;

	h1 {
		margin: 10px 0px 0px 0px;
		padding: 0;
	}
	p {
		margin: 20px 0px 20px 0px;
	}
	@media only screen and (max-width: 900px) {
		max-width: 250px;
		text-align: center;
		padding-bottom: 10px;
	}
`;

export const ButtonContainer = styled.div`
	margin: 2rem 0px;
`;

export const ErrorMessage = styled.p`
	font-size: 14px;
	color: #ff3333;
	max-width: 350px;
	@media only screen and (max-width: 600px) {
		max-width: 270px;
	}
`;

export const StartPageContainer = styled.div`
	margin-top: 25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
