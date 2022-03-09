/** @format */

import React, { useState, useRef } from 'react';
import { MobileMenu, MenuLink, LinkContainer } from './styled-components/index';
import { Link } from 'react-router-dom';

type FlyoutProps = {
	visible: boolean;
	setVisible: (arg: boolean) => null;
};

export default function Flyout({ visible, setVisible }: FlyoutProps) {
	const [active, setActive] = useState('home');

	//closes flyout when clicking outside of the element
	const flyout = useRef<HTMLInputElement>(null);
	const closeOpenMenus = (e) => {
		if (flyout.current && visible && !flyout.current.contains(e.target)) {
			setVisible(false);
		}
	};
	document.addEventListener('mousedown', closeOpenMenus);

	const handleMenuClick = (path) => {
		setActive(path);
		setVisible(false);
	};
	return (
		<MobileMenu visible={visible} ref={flyout}>
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
					onClick={() => handleMenuClick('schedule')}
					active={active === 'schedule'}
				>
					<Link to='/schedule'>
						<p>Schedule</p>
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
					onClick={() => handleMenuClick('faq')}
					active={active === 'faq'}
				>
					<Link to='/faq'>
						<p>FAQ</p>
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
