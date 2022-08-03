/** @format */

import styled from 'styled-components';

//Search
export const NamesContainer = styled.div`
	width: 100%;
	max-width: 600px;
	height: 200px;
	overflow-y: scroll;
`;

export const Name = styled.div`
	height: 40px;
	background-color: white;
	border-bottom: 1px solid whitesmoke;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: #8bb88b;
		color: white;
		cursor: pointer;
	}
`;

export const Input = styled.input`
	height: 40px;
	width: 99%;
	border: none;
	background-color: whitesmoke;
	text-align: center;
	max-width: 600px;
	&:focus {
		outline: none;
	}
`;

//RSVP

export const RsvpTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 45px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
		margin-bottom: 0;
	}
`;

export const SignUpForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 500px;
	border-radius: 5px;
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 600px;
		width: 100%;
	}
	h2 {
		color: black;
		font-weight: 500;
		text-align: center;
		font-family: 'Urbanist', sans-serif;
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
			height: 40px;
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
		height: 40px;
		border: none;
		border-radius: 25px;
		margin: 10px;
		font-weight: 500;
		font-size: 12px;
		background-color: #ef7b9e;
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
	@media only screen and (max-width: 1200px) {
		min-width: unset;
		border: unset;
		margin: 2rem 0rem;
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

export const RsvpContainer = styled.div<{ visible: boolean }>`
	min-height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8rem 1rem 2rem;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
`;
