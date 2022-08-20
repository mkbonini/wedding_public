/** @format */

import { Verify } from 'crypto';
import styled from 'styled-components';

//Search
export const NamesContainer = styled.div`
	width: 100%;
	max-width: 600px;
	height: 200px;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Name = styled.div`
	height: 60px;
	background-color: white;
	border-bottom: 1px solid whitesmoke;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: #000000;
		color: white;
		cursor: pointer;
	}
`;

export const Input = styled.input`
	height: 60px;
	width: 80%;
	border: none;
	text-align: center;
	border: 1px solid lightgray;
	max-width: 600px;
	&:focus {
		outline: none;
	}
`;

export const FlatButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 2rem 0rem;
	.verify-button-back {
		min-width: 200px;
		margin: 2rem 0rem;
		background-color: #ffffff;
		color: #000000;
		border: 1px solid darkgray;
		box-shadow: unset;
	}
	.verify-button-submit {
		min-width: 200px;
		margin: 2rem 0rem;
		background-color: #000000;
		margin-right: 20px;
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
	justify-content: center;
	max-width: 900px;
	width: 100%;
	background-color: white;
	padding-top: 3rem;
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 600px;
		width: 100%;
	}

	ul {
		list-style: none;
		padding: 0;
	}
	li {
		min-width: 240px;
	}
	label {
		&.radio-label {
			opacity: 1;
			height: 100%;
		}
		opacity: 0;
		transition: opacity 1s, height 0 1s;
		height: 0px;
		&.label-visible {
			align-self: flex-start;
			font-size: 14px;
			margin-bottom: 5px;
			opacity: 1;
			transition: opacity 1s;
			color: gray;
			height: 100%;
		}
	}
	input {
		&.form-input {
			height: 60px;
			width: 99%;
			border: none;
			background-color: whitesmoke;
			margin-bottom: 20px;
			text-align: center;
			&:focus {
				outline: none;
			}
			border-bottom: ${(p) => p.color && `5px solid ${p.color}`};
		}
		&.radio-input {
			width: 20px;
			height: 20px;
		}
	}
	button {
		width: 100%;
		max-width: 200px;
		height: 50px;
		border: none;
		border-radius: 3px;
		margin: 10px;
		font-weight: 500;
		font-size: 12px;
		background-color: #000000;
		box-shadow: 1px 3px 4px lightgray;
		color: white;
		&:hover {
			box-shadow: 1px 5px 8px lightgray;
		}
		&#back-button {
			color: black;
			background-color: white;
			box-shadow: 1px 2px 9px lightgrey;
			&:hover {
				box-shadow: 1px 5px 8px lightgray;
			}
		}
	}
	@media only screen and (max-width: 900px) {
		min-width: unset;
		border: unset;
		margin: 2rem 0rem;
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
	justify-content: start;
	align-items: center;
	flex-direction: column;
	height: 80vh;
	padding: 8rem 1rem 0rem 1rem;
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

export const ParagraphText = styled.p`
	max-width: unset;
	@media only screen and (max-width: 900px) {
		max-width: 250px;
		text-align: center;
		padding-bottom: 10px;
	}
`;
