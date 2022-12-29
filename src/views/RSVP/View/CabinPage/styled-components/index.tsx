/** @format */
import styled from 'styled-components';

export const CabinListContainer = styled.div`
	height: 700px;
	overflow: scroll;
	border: 1px solid whitesmoke;
	margin-bottom: 5rem;
	h2 {
		padding: 1rem;
		background: rgba(230, 234, 254, 0.26);
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
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0;
	}
`;

export const CabinInfoSection = styled.div`
	max-width: 1200px;
	min-height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: start;
	position: relative;
	margin: 8rem 1rem 1rem 1rem;
	.stepper-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-bottom: 2rem;
		margin-top: -2rem;
	}
	h2 {
		font-size: 18px;
		margin: 1rem 0rem;
		font-family: 'Circular-Book';
		color: #343232;
	}
	h3 {
		font-size: 17px;
		font-family: 'Circular-Book';
		padding: 0;
		margin: 20px 0px 10px 0px;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Circular-Light';
		color: #343232;
	}
	p.description {
		@media only screen and (min-width: 900px) {
			padding-right: 8rem;
		}
	}
`;

export const CabinCardsContainer = styled.div`
	max-width: 1400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const SelectedCabinContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: 2px 2px 10px 3px rgba(0, 0, 1, 0.09);
	margin-top: 2rem;
	.selected-p {
		display: none;
	}
	@media only screen and (min-width: 900px) {
		flex-direction: row;
		.selected-p {
			display: block;
		}
	}
`;

export const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 150px;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 5px 5px 0px 0px;
	width: 100%;
	@media only screen and (min-width: 900px) {
		height: 200px;
		margin: 20px;
		max-width: 300px;
		border-radius: 5px;
	}
`;

export const ViewMoreLink = styled.div`
	display: none;
	@media only screen and (min-width: 900px) {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 2rem 1rem 0rem;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		:hover {
			cursor: pointer;
			color: #3378cf;
		}
	}
`;

export const SelectedContent = styled.div`
	padding: 1rem;
	h1 {
		margin: 20px 0px;
		font-size: 24px;
		@media only screen and (min-width: 900px) {
			font-size: 30px;
		}
	}
	p {
		margin: 0;
		font-size: 15px;
		max-width: 960px;
		padding-right: 4rem;
		font-family: 'Circular-Light';
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media only screen and (min-width: 900px) {
		padding-right: 3rem;
	}
`;

export const SelectedCabinSection = styled.div`
	margin: 2rem 0rem;
	padding-bottom: 1rem;
`;

export const DeselectButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #ff3333;
	height: 50px;
	text-transform: none;
	font-family: 'Circular-Book';
	font-size: 14px;
	color: #ffdddd;
	padding-right: 0;
	&:hover {
		background-color: #ffdddd;
		color: #ff3333;
	}
	@media only screen and (min-width: 900px) {
		max-width: 200px;
		border-radius: 100px;
	}
`;
