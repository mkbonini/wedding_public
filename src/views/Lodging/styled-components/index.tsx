/** @format */

import styled, { keyframes } from 'styled-components';

export const SubTitles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	font-family: 'Circular-Book';
	.airbnb-block {
		display: flex;
		flex-direction: column;
		align-self: center;
		padding-top: 4rem;
	}
	.section {
		max-width: 1200px;
		h2 {
			font-size: 26px;
			font-family: 'Lazydog';
			text-align: start;
			padding-top: 20px;
			margin: 0;
			@media only screen and (min-width: 900px) {
				font-size: 30px;
			}
		}
		h3 {
			font-family: 'Lazydog';
			font-size: 23px;
			padding: 0;
			margin: 0;
		}
	}
	.bold {
		font-family: 'Circular-Medium';
		font-size: 16px;
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
		max-width: 100px;
		padding: 1rem 0rem;
		margin: auto;
	}
	&#distance {
		max-width: 700px;
		margin: 20px 0px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
	}
	&.line-break {
		height: 200px;
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
	h1 {
		font-family: 'Lazydog';
		margin: 1rem 0px 1rem 0px;
		padding: 0;
		@media only screen and (max-width: 900px) {
			text-align: center;
		}
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
	justify-content: center;
	flex-wrap: wrap;
	padding: 1rem 0rem 2rem 0rem;

	@media only screen and (max-width: 900px) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const AdditionalButton = styled.div`
	height: 70px;
	width: 220px;
	border-radius: 100px;
	background-color: #000000;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	text-decoration: none;
	text-align: center;
	#airbnb-button-content {
		display: none;
	}
	&:hover {
		cursor: pointer;
		span {
			display: none;
		}
		background-color: #ff5a5f;
		color: #ffffff;
		#airbnb-button-content {
			display: block;
			img {
				max-width: 20px;
				margin-left: 5px;
			}
		}
	}

	@media only screen and (max-width: 900px) {
		height: 70px;
		width: 165px;
		border-radius: 5px;
		margin: 2px;
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
	margin: 5px;
`;

export const Section = styled.div`
	padding: 2rem 0rem;
`;
