/** @format */

import styled from 'styled-components';

export const Heading = styled.div<{ scrollVisible: boolean }>`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: rgba(78, 154, 152, 1);
	position: fixed;
	z-index: 10000;
	top: ${(p) => (p.scrollVisible ? '0' : '-70px;')};
	transition: top 0.6s;
	h3 {
		font-family: 'Urbanist', sans-serif;
		width: 100%;
		text-align: center;
		font-weight: 300;
		font-size: 25px;
		color: white;
		padding: 20px;
		margin-left: -65px;
	}
	img {
		width: 25px;
		height: 25px;
		padding: 20px;
		z-index: 99999;
	}
`;

export const HamburgerContainer = styled.div`
	padding-right: 10px;
`;

export const Footer = styled.div`
	height: 120px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background-color: #cae36f;
	color: white;
	padding-bottom: 8rem;
	p {
		padding: 10px;
	}
`;
