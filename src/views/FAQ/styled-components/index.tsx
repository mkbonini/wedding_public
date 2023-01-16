/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 12rem 0rem 8rem 0rem;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h2 {
		font-size: 30px;
		font-family: 'Lazydog';
	}
	h3 {
		align-self: flex-start;
		margin-left: 1rem;
		font-family: 'Lazydog';
		font-size: 26px;
	}
`;

export const ScrollContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	max-width: 1000px;
	padding-bottom: 1rem;

	@media only screen and (max-width: 900px) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const ScrollButton = styled.div`
	height: 120px;
	width: 120px;
	background-color: #ffffff;
	border: 1px solid darkgray;
	border-radius: 3px;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: black;
	color: #ffffff;
	&:hover {
		cursor: pointer;
	}
	&#bottom-button {
		width: 150px;
		height: 40px;
		border-radius: 3px;
		&:hover {
			cursor: pointer;
		}
	}
	&:hover + #accent {
		opacity: 1;
		width: 100%;
	}
	@media only screen and (max-width: 900px) {
		height: 70px;
		width: 100px;
		border-radius: 8px;
		font-size: 14px;
		margin: 0;
		color: white;
	}
`;

export const Accent = styled.div`
	height: 5px;
	width: 100px;
	opacity: 0;
	&.lodging {
		background-color: #3366ff;
	}
	&.rsvp {
		background-color: #c9e265;
	}
	&.general {
		background-color: #ff99ff;
	}
	&.weekend {
		background-color: #3366ff;
	}
	&.wedding {
		background-color: #c9e265;
	}

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const ScrollToTopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;
