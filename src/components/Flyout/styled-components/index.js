/** @format */
import styled from 'styled-components';

export const FlyoutContainer = styled.div`
	position: fixed;
	width: 100%;
	bottom: 0px;
	right: 0;
	background-color: white;
	box-shadow: 0 -5px 5px -5px lightgray;
	z-index: 10;
	padding: 15px 2px 30px 2px;
`;

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	img {
		width: 20px;
		height: 20px;
		margin-bottom: 2px;
	}
`;

export const MenuLink = styled.div`
	padding: 10px;
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		font-size: 13px;
		color: black;
		font-weight: 300;
		font-family: 'Urbanist', sans-serif;
		&:hover {
			font-weight: 400;
			cursor: pointer;
		}
	}
`;
