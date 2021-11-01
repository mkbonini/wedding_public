/** @format */

import styled, { keyframes } from 'styled-components';

//Lodging
export const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	margin: 2rem 0rem;
	h1 {
		font-size: 45px;
		font-family: 'Urbanist', sans-serif;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
	}
	h2 {
		text-transform: uppercase;
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
	}
	h3 {
		padding: 0;
		margin: 0;
	}

	p {
		max-width: 800px;
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
	max-width: 950px;
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

export const CabinCard = styled.div<{ color: string }>`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	position: relative;
	min-height: 150px;
	min-width: 280px;
	width: 100%;
	margin: 5px;
	box-shadow: 2px 2px 7px gray;
	border-radius: 5px;
	opacity: 0.9;
	@media only screen and (min-width: 1200px) {
		min-width: 400px;
	}
	&:hover {
		opacity: 1;
	}
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 18px;
		font-weight: 300;
		margin: 0;
		margin-left: 20px;
		padding: 0;
	}

	h3 {
		font-size: 14px;
	}
	#more {
		width: 30px;
		height: 30px;
		right: 10px;
		top: 10px;
		position: absolute;
	}
	p {
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	#cabin-card-copy {
		display: flex;
		flex-direction: column;
		min-height: 100px;
		margin-left: 5px;
		padding-top: 10px;
		#capacity {
			display: flex;
			flex-direction: row;
			height: 20px;
			padding-bottom: 10px;
			align-items: center;
		}
		#base {
			width: 10px;
			height: 10px;
			background-color: pink;
			border-radius: 50%;
			margin-right: 10px;
		}
	}
`;

export const CabinInfoContainer = styled.div`
	display: flex;
	max-height: 700px;
	padding: 2rem 0rem;
	overflow-x: scroll;
	width: 90%;
	h2 {
		font-family: 'Urbanist', sans-serif;
		text-transform: uppercase;
	}
	@media only screen and (max-width: 1200px) {
		max-width: unset;
		margin: 0;
		max-height: 375px;
	}
`;

export const LodgingContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		text-transform: uppercase;
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
	}
`;

export const LodgingPage = styled.div`
	padding-bottom: 8rem;
`;
