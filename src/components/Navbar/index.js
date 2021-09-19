/** @format */

import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Flyout from '../Flyout';
import { NavMenu, HamburgerContainer } from './styled-components';

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
