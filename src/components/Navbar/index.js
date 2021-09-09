/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Spin as Hamburger } from 'hamburger-react';
import Flyout from '../Flyout';

const NavMenu = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(221, 113, 86);
	h3 {
		width: 100%;
		text-align: center;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		font-size: 40px;
		margin-left: 60px;
		color: white;
	}
`;

const HamburgerContainer = styled.div`
	padding-right: 10px;
`;

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<NavMenu>
				<h3> </h3>
				<HamburgerContainer>
					<Hamburger toggled={isOpen} toggle={setOpen} color='#ffffff' />
				</HamburgerContainer>
			</NavMenu>
			<Flyout visible={isOpen} />
		</>
	);
}
