/** @format */

import React, { useState, useEffect } from 'react';
// import { Spin as Hamburger } from 'hamburger-react';
import Flyout from '../Flyout';
import { NavMenu } from './styled-components';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			<NavMenu>
				<h3>M + M</h3>
			</NavMenu>
			<Flyout visible={isOpen} setVisible={setOpen} />
		</>
	);
}
