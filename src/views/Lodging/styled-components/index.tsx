/** @format */

import styled, { keyframes } from 'styled-components';

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	div {
		margin: 1rem;
		p {
			margin: 1rem;
			max-width: 800px;
			font-size: medium !important;
		}
	}
`;

export const SubTitles = styled.div<{ direction: string }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	div {
		background-color: ${(p) =>
			p.direction === 'right' ? '#f7669b' : '#cae36f'};
		height: 120px;
		width: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 3rem 0rem 1rem 0rem;
		align-self: ${(p) => (p.direction === 'right' ? 'flex-end' : 'flex-start')};
		h1 {
			font-family: 'Urbanist', sans-serif;
			text-transform: uppercase;
			text-align: center;
			font-weight: 300;
			font-size: 25px;
			color: white;
			margin: 0;
			padding: 0;
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

export const CabinCard = styled.div<{ color: string }>`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	position: relative;
	min-width: 320px;
	width: 100%;
	margin: 5px;
	box-shadow: 2px 2px 7px gray;
	border-radius: 5px;
	opacity: 0.9;
	background-color: white;
	@media only screen and (min-width: 1200px) {
		min-width: 400px;
	}
	&:hover {
		cursor: pointer;
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

export const CabinContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 3rem;
`;
export const CabinInfoContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	width: 100%;
	max-height: 700px;
	padding-left: 1rem;
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
	overflow: hidden;
	h2 {
		text-transform: uppercase;
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
	}
	h1 {
		font-size: 45px;
		text-transform: uppercase;
		font-family: 'Urbanist', sans-serif;
		font-weight: 300;
		margin: 0;
		padding: 0;
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
	padding-bottom: 3rem;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
	padding-top: 8rem;
`;

export const ContentCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const AdditionalLodgingLinks = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 900px;
	span {
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid darkgray;
		border-radius: 10px;
		height: 50px;
		margin: 5px;
		&:hover {
			background-color: #f7669b;
			border: 1px solid #f7669b;
			a {
				color: white;
			}
		}
		a {
			text-decoration: none;
			color: darkslategray;
		}
	}
`;

export const FAQSection = styled.div`
	width: 100%;
	max-width: 1000px;
`;
export const Accordian = styled.div`
	box-shadow: 0px 2px 4px lightgray;
	margin-bottom: 15px;
	margin: 1rem;

	&:nth-child(1n) {
		border-left: 5px solid rgba(78, 154, 152, 1);
	}
	&:nth-child(2n) {
		border-left: 5px solid #cae36f;
	}
	&:nth-child(3n) {
		border-left: 5px solid #f7669b;
	}
	&:nth-child(4n) {
		border-left: 5px solid #ffd32d;
	}
`;
export const Question = styled.div<{ active: boolean }>`
	font-weight: ${(p) => (p.active ? '900' : '300')};
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	div.view-answer {
		font-size: 20px;
		font-weight: 900;
		padding: 10px 30px 10px;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const AnswerContainer = styled.div`
	&.answer_wrapper {
		height: 0;
		overflow: hidden;
	}
	&.answer_wrapper.open {
		height: auto;
	}
`;
export const Answer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 10px;
	margin: 0px 0px 1rem 0px;
`;
