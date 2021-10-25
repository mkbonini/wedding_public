/** @format */

import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	position: fixed;
	overflow: scroll;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	padding-bottom: 6rem;
	z-index: 1;
	h1 {
		font-size: 45px;
		color: black;
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
	h2 {
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
	@media only screen and (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const Close = styled.div<{ color: string }>`
	display: flex;
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 10px;
	min-height: 40px;
	background-color: transparent;
	img {
		margin-right: 5px;
		width: 25px;
		height: 25px;
		background-color: whitesmoke;
		border-radius: 50%;
		padding: 13px;
		&:hover {
			padding: 14px;
		}
		@media only screen and (max-width: 1200px) {
			padding: 10px;
			&:hover {
				padding: 11px;
			}
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 3rem;
	@media only screen and (max-width: 1200px) {
		padding: unset;
	}
	h3 {
		font-family: 'Urbanist', sans-serif;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 25px;
	}
`;
export const SignupContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-bottom: 2rem;
`;
export const LodgeNumberIcon = styled.div<{ color: string }>`
	width: 15px;
	height: 15px;
	padding: 5px;
	background-color: ${(p) => p.color && p.color};
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Name = styled.div`
	width: 135px;
	margin-left: 5px;
	color: black;
	font-size: 14px;
`;

export const NameContainer = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0px 2px 2px 0px;
`;
export const SignUpForm = styled.div<{ color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-width: 500px;
	margin: 2rem;
	padding: 4rem 0rem;
	border: 1px solid whitesmoke;
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
	input {
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
	button {
		width: 90%;
		height: 40px;
		border: none;
		border-radius: 25px;
		margin-top: -10px;
		font-weight: 500;
		font-size: 12px;
		background-color: ${(p) => p.color && p.color};
		box-shadow: 1px 3px 4px lightgray;
		color: white;
		&:hover {
			box-shadow: 1px 5px 8px lightgray;
		}
	}
	@media only screen and (max-width: 1200px) {
		margin: 20px 0px;
		padding: 60px 0px;
		min-width: unset;
		border: unset;
		border-top: 1px solid whitesmoke;
	}
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1200px) {
		flex-direction: column;
	}
`;

export const ImageContainer = styled.div`
	img {
		width: 100%;
	}
	@media only screen and (max-width: 1200px) {
		padding: 0;
		display: block;
	}
`;

export const ContentWidth = styled.div`
	padding: 0rem 1rem;
`;
