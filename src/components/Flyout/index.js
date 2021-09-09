/** @format */

import styled from 'styled-components';

const FlyoutContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 300px;
	top: 70px;
	right: 0;
	background-color: whitesmoke;
`;

const LinkContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const MenuLink = styled.a`
	font-size: 30px;
	font-family: 'Raleway', sans-serif;
	font-weight: 100;
	text-transform: uppercase;
	padding: 15px;
	&:hover {
		font-weight: 400;
		cursor: pointer;
	}
`;

export default function Navbar({ visible }) {
	return (
		<>
			{visible && (
				<FlyoutContainer>
					<LinkContainer>
						<MenuLink>Our Story</MenuLink>
						<MenuLink>The Tails</MenuLink>
						<MenuLink>RSVP</MenuLink>
						<MenuLink>Registry</MenuLink>
					</LinkContainer>
				</FlyoutContainer>
			)}
		</>
	);
}
