/** @format */

import styled from 'styled-components';
export const KidsContainer = styled.div`
	padding-top: 2rem;
`;

export const AddChildLink = styled.a`
	margin: 2rem 0rem;
	max-width: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 5px;
	color: #3378cf;
	:hover {
		cursor: pointer;
		color: #99bbe6;
	}
`;
export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem 0rem 0rem;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem 0rem;
	}
`;
export const ContactInfoSection = styled.div`
	max-width: 1000px;
	width: 100%;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	padding-top: 3rem;
	margin: 1rem;

	@media only screen and (min-width: 900px) {
		padding-top: 8rem;
	}

	.sub-heading {
		font-size: 18px;
		font-weight: 500;
		padding: 1rem 0rem;
		padding-bottom: 20px;
		color: #343232;
	}

	.heading {
		font-size: 20px;
		text-align: center;
		font-weight: 700;
	}

	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Circular-Light';
		color: #343232;
	}
	p.main-sub-heading {
		text-align: center;
		padding-top: 10px;
	}
`;

export const InputContainer = styled.div`
	padding-right: 20px;
	&.input-group {
		margin: 10px 0px;
		width: 100%;
		@media only screen and (min-width: 900px) {
			max-width: 300px;
		}
	}
	&.input-gap {
		padding-bottom: 15px;
	}
`;

export const Form = styled.form`
	padding: 1rem;
	label {
		font-size: 14px;
		padding-bottom: 5px;
	}

	&:focus {
		outline: none;
	}
`;

export const ContactFeild = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: start;
	&.plus-one-field {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
	}
	&.child-inputs {
		display: flex;
		flex-direction: column;
		padding: 1rem 0rem 2rem 0rem;
	}
	&.children-field {
		display: flex;
		flex-direction: column;
		.message-container {
			background-color: whitesmoke;
			padding: 0rem 2rem;
			border-radius: 5px;
			margin: 1.5rem 0rem;
			max-width: 900px;
		}
		p.title {
			font-family: 'Circular-Medium';
			padding-top: 2rem;
			font-size: 16px;
		}
		p.description {
			line-height: 18px;
			font-size: 16px;
			padding: 0px 0px 20px 0px !important;
		}
	}
`;

export const ImageContainer = styled.div`
	&.delete-button {
		border-radius: 4px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		padding: 5px;
		cursor: pointer;
		align-self: center;
		background-color: #000;
		color: #fff;
		font-size: 15px;
		svg {
			font-size: 15px;
			color: #fff;
			margin-left: 10px;
		}
		:hover {
			box-shadow: 2px 2px 10px 2px lightgray;
		}
	}
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0rem 6rem 0rem;
	gap: 20px;
`;

export const RsvpContainer = styled.div`
	padding: 1rem 1rem 0rem 1rem;
`;

export const LineBreak = styled.div`
	height: 1px;
	background-color: whitesmoke;
	width: 100%;
	max-width: '800px';
	margin: 1rem 0rem;
`;

export const SubmitButton = styled.button`
	min-width: 100px;
	background-color: #3366ff;
	height: 50px;
	border-radius: 100px;
	text-transform: none;
	padding: 0px 50px;
	font-family: 'Circular-Book';
	font-size: 14px;
	line-height: 20px;
	color: #fff;
	border: none;
	:hover {
		background-color: #6d7de9;
	}
`;
