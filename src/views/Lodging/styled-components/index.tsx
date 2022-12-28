/** @format */

import styled, { keyframes } from 'styled-components';

export const SubTitles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	&#main {
		padding: 2rem 0rem;
	}
	.section {
		max-width: 980px;
		margin: auto;
		h2 {
			font-size: 22px;
			font-family: 'Gilroy-Bold';
			text-align: center;
			padding: 0;
			margin: 0;
			@media only screen and (min-width: 900px) {
				font-size: 30px;
			}
		}
	}
`;

export const ImageContainer = styled.div`
	height: 100%;
	border-radius: 5px 5px 0px 0px;
	img {
		border-radius: 5px 5px 0px 0px;
		width: 100%;
		height: 100%;
	}
	&#airbnb {
		max-width: 200px;
		padding: 1rem 0rem;
		margin: auto;
	}
	&#distance {
		max-width: 600px;
		margin: 20px 0px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
`;

export const bounce = keyframes`
  0%{
	transform: translateY(0);
  }
  50%{
	transform: translateY(-15px);
  }
  100% {
	transform: translateY(0px);
  }
`;

export const LodgingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0rem 1rem;
	h2 {
		font-weight: 300;
	}
	#lodging-description {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		p {
			font-size: medium !important;
			max-width: 800px;
			margin: 1rem;
		}
	}
`;

export const LodgingPage = styled.div`
	width: 100%;
	max-width: 1000px;
	padding: 12rem 0rem 2rem 0rem;
	margin: auto;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem 2rem 0rem;
	}
`;

export const ContentCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const AdditionalContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	max-width: 850px;
	padding-bottom: 3rem;

	@media only screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const AdditionalButton = styled.div`
	height: 150px;
	width: 150px;
	background-color: #000000;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	color: #ffffff;
	text-decoration: none;
	text-align: center;

	&:hover {
		cursor: pointer;
		border-radius: 50%;
	}
	&:hover + #accent {
		opacity: 1;
		width: 100%;
	}

	@media only screen and (max-width: 900px) {
		height: 70px;
		width: 260px;
		border-radius: 2px;
		margin: 2px;
		&:hover {
			border-radius: 3px;
		}
		&:hover + #accent {
			opacity: 0;
			width: 100%;
		}
	}
`;

export const Accent = styled.div`
	height: 5px;
	width: 100px;
	opacity: 0;
	background-color: #ff5a5f;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 10px;
`;

export const AccentSection = styled.div`
	min-height: 650px;
	background: rgba(169, 190, 255, 0.17);
	margin-top: 4rem;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	p {
		margin: 2rem;
		padding: 0;
	}
	@media only screen and (max-width: 900px) {
		min-height: 850px;
	}
`;

export const Section = styled.div`
	padding: 8rem 0rem;
`;
