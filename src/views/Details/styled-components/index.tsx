/** @format */

import styled from 'styled-components';

export const DetailsPage = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding: 9rem 1rem 4rem 1rem;
	@media only screen and (min-width: 900px) {
		padding: 5rem 1rem 0rem 1rem;
	}
`;

export const MobileSeperator = styled.div`
	display: block;
	height: 1px;
	background-color: whitesmoke;
	margin: 3rem 1rem;
	width: 100%;
	@media only screen and (min-width: 900px) {
		display: none;
	}
`;

export const ContentContainer = styled.div<{
	eyebrowColor: string;
	align: string;
	id: string;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0;
	width: 100vw;
	min-height: 350px;
	@media only screen and (min-width: 900px) {
		padding: 3rem 0rem;
		min-height: 500px;
		background-color: ${(p) =>
			p.align === 'end' ? 'rgba(169, 190, 255, 0.17);' : '#ffffff'};
	}
	.eyebrow {
		font-size: 30px;
		color: ${(p) => p.eyebrowColor};
		text-align: start;
		font-family: 'Lazydog';
		margin-bottom: 10px;
		@media only screen and (min-width: 900px) {
			text-align: ${(p) => p.align};
		}
	}
	h2 {
		font-size: 35px;
		line-height: 30px;
		text-align: start;
		padding: 0;
		margin: 0;
		@media only screen and (min-width: 900px) {
			font-size: 45px;
			text-align: ${(p) => p.align};
		}
	}
	h3 {
		font-size: 23px;
		text-align: start;
		margin-top: 10px !important;

		@media only screen and (min-width: 900px) {
			font-size: 30px;
			text-align: ${(p) => p.align};
		}
	}
	p {
		max-width: 650px;
		text-align: start;
		font-family: 'Circular-Book';
		@media only screen and (min-width: 900px) {
			text-align: ${(p) => p.align};
		}
	}
`;

export const DetailSection = styled.div`
	max-width: 650px;
	margin: 1rem;
	p {
		font-family: 'Circular-Light';
	}
	h2 {
		font-family: 'Circular-Medium';
	}
	h3 {
		padding: 0;
		margin: 0;
	}

	@media only screen and (min-width: 900px) {
		margin: 0;
	}
`;
