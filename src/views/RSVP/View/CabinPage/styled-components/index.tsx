/** @format */
import styled from 'styled-components';

export const CabinListContainer = styled.div`
	height: 670px;
	overflow: scroll;
	border: 1px solid whitesmoke;
	margin-bottom: 5rem;
	h2 {
		padding: 1rem;
		background-color: whitesmoke;
		position: sticky;
	}
`;
export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0rem 3rem 0rem;
	gap: 20px;
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem 0rem 0rem;
	width: 100%;
`;

export const CabinInfoSection = styled.div`
	max-width: 1400px;
	display: flex;
	flex-direction: column;
	align-items: start;
	position: relative;
	margin: 17rem 4rem 0rem 4rem;
	.stepper-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	h2 {
		font-size: 18px;
		margin: 1rem 0rem;
		font-family: 'Gilroy-SemiBold';
		color: #343232;
	}
	h3 {
		font-size: 17px;
		font-family: 'Gilroy-SemiBold';
		padding: 0;
		margin: 20px 0px 10px 0px;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Nunito';
		color: #343232;
	}
	p.description {
		padding-right: 8rem;
	}
`;

export const CabinCardsContainer = styled.div`
	max-width: 1400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
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
