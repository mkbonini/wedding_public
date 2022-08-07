/** @format */

import styled, { keyframes } from 'styled-components';

export const SubTitles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	div {
		margin: 3rem 0rem 1rem 0rem;
		h2 {
			font-size: 22px;
			font-family: 'Gilroy-Bold';
			text-align: left;
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
	&#colorado-map {
		max-width: 900px;
		border-radius: 5px;
		margin: 1rem;
		img {
			border-radius: 5px;
		}
	}
	&#lodging {
		max-width: 400px;
		border-radius: 5px;
		padding-bottom: 20px;
		img {
			border-radius: 5px;
		}
	}
	&#airbnb {
		max-width: 200px;
		padding: 1rem 0rem 2rem 0rem;
	}
	&#additional {
		max-width: 400px;
		margin: 20px 0px;
		border-radius: 5px;
		img {
			border-radius: 5px;
		}
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

export const MapImageContainer = styled.div`
	max-width: 1200px;
	img {
		width: 100%;
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

export const MapContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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

export const LodgingPage = styled.div<{ visible: boolean }>`
	width: 100%;
	max-width: 1000px;
	padding: 8rem 0rem 2rem 0rem;
	margin: auto;
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
	padding-bottom: 1rem;

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
