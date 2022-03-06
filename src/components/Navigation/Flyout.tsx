/** @format */

import React, { useState } from 'react';
import { MobileMenu, MenuLink, LinkContainer } from './styled-components/index';
import { Link } from 'react-router-dom';

type FlyoutProps = {
	visible: boolean;
	setVisible: (arg: boolean) => null;
};

export default function Flyout({ visible, setVisible }: FlyoutProps) {
	const [active, setActive] = useState('home');

	const handleMenuClick = (path) => {
		setActive(path);
		setVisible(false);
	};
	return (
		<MobileMenu visible={visible}>
			<LinkContainer>
				<MenuLink
					onClick={() => handleMenuClick('home')}
					active={active === 'home'}
				>
					<Link to='/'>
						<p>Home</p>
					</Link>
				</MenuLink>
				<MenuLink
					onClick={() => handleMenuClick('details')}
					active={active === 'details'}
				>
					<Link to='/details'>
						<p>Details</p>
					</Link>
				</MenuLink>
				<MenuLink
					onClick={() => handleMenuClick('lodging')}
					active={active === 'lodging'}
				>
					<Link to='/lodging'>
						<p>Lodging</p>
					</Link>
				</MenuLink>
				<MenuLink
					onClick={() => handleMenuClick('registry')}
					active={active === 'registry'}
				>
					<Link to='/registry'>
						<p>Registry</p>
					</Link>
				</MenuLink>
				<MenuLink
					onClick={() => handleMenuClick('rsvp')}
					active={active === 'rsvp'}
				>
					<Link to='/rsvp'>
						<p>RSVP</p>
					</Link>
				</MenuLink>
			</LinkContainer>
		</MobileMenu>
	);
}
