/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 8rem 0rem;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	h2 {
		font-size: 30px;
		font-family: 'Lexend', sans-serif;
	}
	h3 {
		align-self: flex-start;
		&#lodging {
			color: #3366ff;
		}
		&#rsvp {
			color: #c9e265;
		}
		&#general {
			color: #ff99ff;
		}
		&#weekend {
			color: #3366ff;
		}
		&#wedding {
			color: #c9e265;
		}
	}
`;

export const ScrollContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 850px;
	padding-bottom: 1rem;

	@media only screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const ScrollButton = styled.div`
	height: 150px;
	width: 100%;
	background-color: #000000;
	color: #ffffff;
	border-radius: 3px;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
		border-radius: 50%;
	}
	&#bottom-button {
		width: 150px;
		height: 40px;
		&:hover {
			cursor: pointer;
			border-radius: 3px;
		}
	}
	&:hover + #accent {
		opacity: 1;
		width: 100%;
	}

	@media only screen and (max-width: 900px) {
		height: 70px;
		width: 90%;
		border-radius: 2px;
		margin: 2px;
		&:hover {
			border-radius: 3px;
		}
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
	width: 100%;
	margin: 10px;
`;
