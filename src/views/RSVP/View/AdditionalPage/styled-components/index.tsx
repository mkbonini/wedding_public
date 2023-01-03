/** @format */
import styled from 'styled-components';
export const AdditionalPageContainer = styled.div`
	margin: 8rem 1rem 0rem 1rem;
`;

export const StepperContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0rem 6rem 0rem;
	gap: 20px;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		padding: 20px 0px 40px 0px;
	}
`;

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem 0rem 0rem;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		padding: 0px 0px 10px 0px;
	}
`;

export const LineBreak = styled.div`
	height: 1px;
	background-color: whitesmoke;
	width: 100%;
	max-width: '800px';
	margin: 1rem 0rem;
`;

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	h1 {
		font-size: 20px;
		text-align: center;
	}
	h2 {
		font-size: 18px;
		margin: 1rem 0rem;
		font-family: 'Circular-Book';
		color: #343232;
		text-align: start;
	}
	p {
		padding: 0;
		margin: 0px 0px 10px 0px;
		font-family: 'Circular-Light';
		color: #343232;
	}
`;

export const SectionBreaks = styled.div`
	margin: 10px 0px;
	width: 100%;
	padding: 1rem 0rem;
	h3 {
		font-size: 16px;
		font-family: 'Circular-Book';
	}
	&.checkmark-section {
		padding: 0rem 0rem 1rem 0rem;
	}
`;

export const SubmitButton = styled.button`
	min-width: 100px;
	background-color: #3366ff;
	height: 50px;
	border-radius: 100px;
	text-transform: none;
	padding: 0px 50px;
	font-family: 'Circular-Book';
	font-size: 14px;
	line-height: 20px;
	color: #fff;
	border: none;
	:hover {
		background-color: #6d7de9;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
