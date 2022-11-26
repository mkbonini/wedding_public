/** @format */

import styled from 'styled-components';

export const ContactInfoSection = styled.div`
	width: 100%;
	max-width: 1200px;
	min-height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 8rem;
	h1 {
		font-size: 20px;
	}
	h2 {
		font-size: 17px;
		margin-left: 15px;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;

		&.plus-one {
			margin: 0px 0px 10px 15px;
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	label {
		font-size: 14px;
		padding-bottom: 5px;
	}
	input {
		&.form-input {
			height: 50px;
			min-width: 300px;
			width: 100%;
			border: 1px solid gray;
			background-color: #ffffff;
			border-radius: 3px;
			text-align: start;
			padding-left: 15px;
			box-sizing: border-box;
			&:focus {
				outline: none;
			}
		}
	}

	&:focus {
		outline: none;
	}
`;

export const ContactFeild = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	&.plus-one-feild {
		display: flex;
		flex-direction: row;
	}
	&.children-feild {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (max-width: 900px) {
		&.plus-one-feild {
			display: flex;
			flex-direction: column;
		}

		display: flex;
		flex-direction: column;
	}
`;

export const FormFeild = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
	select {
		display: block;
		padding: 10px;
		height: 55px;
		max-width: 330px;
		font-size: 16px;
		border: 1px solid gray;
		background-color: #ffffff;
		border-radius: 3px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		appearance: none;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right 1rem center;
		background-size: 1em;
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
	padding-top: 3rem;
`;

export const Button = styled.button`
	height: 50px;
	width: 200px;
	&.main {
		background-color: #000000;
		color: #ffffff;
	}
	&.secondary {
		color: #000000;
		background-color: #ffffff;
		border: 1px solid #000000;
	}
	&.add-child-button {
		margin-top: 20px;
	}
`;

export const AttendingContent = styled.div<{
	child: boolean;
	plusOne: boolean;
}>``;
