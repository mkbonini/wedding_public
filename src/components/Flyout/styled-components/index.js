/** @format */
import styled from 'styled-components';

export const FlyoutContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 300px;
	top: 70px;
	right: 0;
	background-color: whitesmoke;
	transition: 200ms ease;
	z-index: 10;
`;

export const LinkContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

export const MenuLink = styled.div`
	padding: 10px;
	a {
		text-decoration: none;
		font-size: 30px;
		color: black;
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
		text-transform: uppercase;
		&:hover {
			font-weight: 400;
			cursor: pointer;
		}
	}
`;
