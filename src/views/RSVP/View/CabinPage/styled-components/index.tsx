/** @format */
import styled from 'styled-components';

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3rem;
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
`;

export const CabinInfoSection = styled.div`
	width: 100%;
	max-width: 1200px;
	min-height: 600px;
	display: flex;
	flex-direction: column;
	align-items: start;
	padding-bottom: 8rem;
	h2 {
		font-size: 20px;
	}
	p {
		padding: 20px 0px;
		margin: 0px 0px 10px 0px;
		&.plus-one {
			margin: 0px 0px 10px 15px;
		}
	}
`;

export const CabinCardsContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	margin: 2rem 0rem;
	overflow: hidden;
	position: relative;
`;

export const FadeLeft = styled.div`
	position: absolute;
	z-index: 1000;
	height: 100%;
	width: 150px;
	left: 0;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(240, 240, 240, 0.6) 0%,
		rgba(255, 255, 255, 0) 100%
	);
`;

export const FadeRight = styled.div`
	position: absolute;
	z-index: 1000;
	height: 100%;
	width: 150px;
	right: 0;
	background: rgb(255, 255, 255);
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(240, 240, 240, 0.6) 100%
	);
`;
export const CabinCard = styled.div`
	margin: 1rem;
	height: 950px;
	min-width: 450px;
	outline: 1px solid lightgray;
	position: relative;

	img {
		width: 100%;
	}
`;

export const Title = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 40px;
		margin: 0;
		font-family: 'Gilroy-Bold';
	}
	h2 {
		font-size: 17px;
		font-family: 'Gilroy';
		margin: 5px 5px 5px 0px;
	}
`;

export const ContentContainer = styled.div`
	padding: 2rem 2rem 0rem 2rem;
`;

export const SelectCabinButton = styled.div`
	width: 100%;
	height: 60px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
	cursor: pointer;
`;

export const CabinSpotContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 0rem 2rem;
`;
export const CabinSpot = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	min-width: 170px;
	padding: 10px;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		&.spot-number-unavailable {
			font-size: 12px;
			background-color: ${(p) => p.color && p.color};
			width: 25px;
			height: 25px;
			color: white;
			margin-right: 10px;
		}
		&.spot-number-available {
			font-size: 12px;
			background-color: black;
			width: 25px;
			height: 25px;
			color: white;
			margin-right: 10px;
		}
	}
`;
export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: end;
	justify-content: center;
`;

export const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	top: 37%;
	padding-right: 40px;
	cursor: pointer;
	&:hover {
		color: #ff5a5f;
	}
	#airbnb-icon {
		font-size: 30px;
		padding: 5px;
		margin: 0;
	}
	p {
		font-size: 14px;
		margin: 0;
		padding: 0;
		text-align: center;
		max-width: 50px;
		line-height: 14px;
	}
`;
