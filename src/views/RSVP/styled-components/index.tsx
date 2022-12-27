/** @format */

import styled from 'styled-components';

export const ButtonContainer = styled.div`
	margin: 2rem 0px;
`;
//Search

export const ErrorMessage = styled.p`
	font-size: 14px;
	color: #ff3333;
	max-width: 350px;
	@media only screen and (max-width: 600px) {
		max-width: 270px;
	}
`;

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

export const FlatButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2rem 0rem;
	.verify-button-back {
		min-width: 140px;
		margin: 0;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid lightgray;
		box-shadow: unset;
	}
	.verify-button-submit {
		min-width: 140px;
		margin: 0;
		background-color: #000000;
		margin-left: 20px;
	}

	@media only screen and (max-width: 800px) {
		flex-direction: column;
		.verify-button-back,
		.verify-button-submit {
			margin: 10px 0px;
		}
	}
`;

//RSVP

export const RsvpTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 20px;
	h1 {
		font-size: 25px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
		margin-bottom: 0;
	}
	h2 {
		color: black;
		font-weight: 500;
		text-align: center;
		font-size: 18px;
	}
`;

export const SignUpForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	background-color: white;
	min-height: 900px;
	margin-top: 8rem;
	@media only screen and (max-width: 900px) {
		min-width: unset;
		border: unset;
		padding-top: 0rem;
	}
`;

export const Radio = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-bottom: 2rem;
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		label {
			margin: 10px;
		}
	}
`;

export const RsvpContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 80vh;
	padding: 1rem;
`;

export const BackgroundAccent = styled.div`
	z-index: -7;
	background: rgba(169, 190, 255, 0.17);
	height: 600px;
	width: 100%;
	margin-top: -30rem;
`;

export const Accent = styled.div`
	height: 0.5rem;
	width: 100px;
	margin: 10px 0px;
	background-color: #ff99ff;
`;

export const Heading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: unset;
	margin-top: -2rem;
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
