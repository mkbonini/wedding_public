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

export const SelectedCabinContainer = styled.div`
	display: flex;
	flex-direction: row;
	border-radius: 4px;
	box-shadow: 2px 2px 10px 3px rgba(0, 0, 1, 0.07);
`;

export const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 200px;
	max-width: 300px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin: 20px;
	border-radius: 5px;
	width: 100%;
`;

export const ViewMoreLink = styled.div`
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
`;

export const SelectedContent = styled.div`
	p {
		margin: 0;
		padding-right: 4rem;
		font-size: 15px;
		padding-right: 6rem;
	}
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-right: 3rem;
`;

export const SelectedCabinSection = styled.div`
	margin: 1rem 0rem 3rem 0rem;
`;
