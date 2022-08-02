/** @format */

import styled from 'styled-components';

export const Heading = styled.div<{ scrollVisible: boolean; admin: boolean }>`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: #ffffff;
	color: #000000;
	position: fixed;
	z-index: 10000;
	top: ${(p) => (p.scrollVisible ? '0' : '-70px;')};
	transition: top 0.6s;
	border-bottom: 1px solid #cfd4eb;
	h3 {
		font-family: 'Lexend', sans-serif;
		width: 100%;
		text-align: center;
		font-weight: 300;
		font-size: 25px;
		color: #000000;
		padding: 20px;
		margin-left: ${(p) => (!p.admin ? '0px' : '-65px')};
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #cae36f;
	color: white;
	padding: 2rem 0rem;
	div {
		padding: 0;
	}
`;
