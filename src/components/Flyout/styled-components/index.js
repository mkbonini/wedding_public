/** @format */
import styled from 'styled-components';

export const FlyoutContainer = styled.div`
	position: fixed;
	overflow-y: scroll;
	width: 100%;
	bottom: 0px;
	right: 0;
	background-color: white;
	box-shadow: 0 -5px 5px -5px lightgray;
	z-index: 10;
	padding: 15px 0px;
`;

export const LinkContainer = styled.div`
	padding: 5px;
	width: 100%;
	display: flex;
	flex-direction: row;
	img {
		width: 25px;
		height: 25px;
	}
`;

export const MenuLink = styled.div`
	min-width: 90px;
	padding: 10px;

	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-size: 15px;
		color: black;
		font-weight: 100;
		text-transform: uppercase;
		font-family: 'Urbanist', sans-serif;
		&:hover {
			font-weight: 400;
			cursor: pointer;
		}
	}
`;
