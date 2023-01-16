/** @format */

import styled from 'styled-components';

export const DetailsPage = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding: 8rem 1rem;
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
	padding: 2rem 0rem;
	width: 100vw;
	background-color: ${(p) =>
		p.align === 'end' ? 'rgba(169, 190, 255, 0.17);' : '#ffffff'};
	@media only screen and (min-width: 900px) {
		min-height: 650px;
		margin-top: -5rem;
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

export const ImageContainer = styled.div`
	display: none;
	@media only screen and (min-width: 900px) {
		display: block;
		max-width: 350px;
		margin: -350px 0px 19px -350px;
		img {
			width: 100%;
		}
		&#cobra {
			max-width: 150px;
			margin: -250px -400px 0px 0px;
		}
		&#heart {
			max-width: 150px;
			margin: -415px 0px 19px -350px;
		}
		&#smiley {
			max-width: 200px;
			margin: -350px -400px 120px 0px;
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
