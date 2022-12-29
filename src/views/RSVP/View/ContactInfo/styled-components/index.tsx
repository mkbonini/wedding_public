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
`;
export const ContactInfoSection = styled.div<{
	kids: boolean;
	plusOne: boolean;
}>`
	width: 100%;
	max-width: 1000px;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	padding-top: 8rem;

	h1 {
		font-size: 20px;
		text-align: center;
	}
	h2 {
		font-size: 18px;
		margin: 1rem 0rem;
		font-family: 'Gilroy-SemiBold';
		color: #343232;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Nunito';
		color: #343232;
	}
	p.heading {
		text-align: center;
	}
`;

export const InputContainer = styled.div`
	padding-right: 20px;
`;

export const Form = styled.form`
	width: 100%;
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
	&.plus-one-field {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
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
			font-weight: 700;
			padding-top: 2rem;
			font-size: 15px;
		}
		p.description {
			line-height: 18px;
			font-size: 15px;
			padding: 0px 0px 20px 0px !important;
		}
	}
`;

export const ImageContainer = styled.div`
	&.delete-button {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		padding: 5px;
		cursor: pointer;
		align-self: center;
		svg {
			font-size: 20px;
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
