/** @format */
import styled from 'styled-components';

// export const MobileMenu = styled.div`
// 	position: fixed;
// 	height: 80px;
// 	width: 100%;
// 	bottom: 0px;
// 	right: 0;
// 	background-color: white;
// 	box-shadow: 0 -5px 5px -5px lightgray;
// 	z-index: 100;
// `;

export const MobileMenu = styled.div`
	position: fixed;
	height: 100vh;
	width: 80%;
	background-color: whitesmoke;
	right: 0;
`;

// export const LinkContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-evenly;
// 	height: 100%;
// 	img {
// 		width: 22px;
// 		height: 22px;
// 		margin-bottom: 2px;
// 	}
// `;

export const LinkContainer = styled.div``;

// export const MenuLink = styled.div<{ active: boolean }>`
// 	box-shadow: ${(p) => (p.active ? '0px 5px 10px #E7E6E1' : 'white')};
// 	padding: 10px 10px 25px 10px;
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	a {
// 		min-width: 40px;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;
// 		text-decoration: none;
// 		font-size: 12px;
// 		color: black;
// 		font-weight: 300;
// 		font-family: 'Urbanist', sans-serif;

// 		&:hover {
// 			font-weight: 400;
// 			cursor: pointer;
// 		}
// 		p {
// 			padding-left: 5px;
// 			margin: 0;
// 		}
// 	}
// `;

export const MenuLink = styled.div<{ active: boolean }>``;
