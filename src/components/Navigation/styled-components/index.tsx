/** @format */
import styled from 'styled-components';

export const MobileMenu = styled.div<{ visible: boolean }>`
	display: ${(p) => (p.visible ? 'block' : 'none')};
	position: fixed;
	height: 100vh;
	width: 100%;
	max-width: 300px;
	background-color: darkslategrey;
	left: 0;
	z-index: 100000;
	padding-top: 2rem;
	top: 70px;
`;

export const LinkContainer = styled.div`
	width: 50%;
	border-radius: 50%;
	img {
		width: 20px;
		height: 20px;
		margin-bottom: 2px;
		margin-right: 10px;
	}
`;

export const MenuLink = styled.div<{ active: boolean }>`
	padding: 5px 0px;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${(p) => (p.active ? 'darkslategrey' : 'white')};
		font-size: 16px;
		background-color: ${(p) => (p.active ? 'white' : 'darkslategrey')};
		border-radius: 0px 40px 40px 0px;
		padding-left: 40px;
	}
`;
