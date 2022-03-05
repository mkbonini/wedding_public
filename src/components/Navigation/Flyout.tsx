/** @format */

import React, { useState } from 'react';
import homeInactive from '../../assets/home-inactive.png';
import homeActive from '../../assets/home-active.png';
import infoInactive from '../../assets/info-inactive.png';
import infoActive from '../../assets/info-active.png';
import sleepingInactive from '../../assets/sleeping-inactive.png';
import sleepingActive from '../../assets/sleeping-active.png';
import giftInactive from '../../assets/gift-inactive.png';
import giftActive from '../../assets/gift-active.png';
import rsvpInactive from '../../assets/rsvp-inactive.png';
import rsvpActive from '../../assets/rsvp-active.png';
import { MobileMenu, MenuLink, LinkContainer } from './styled-components/index';
import { Link } from 'react-router-dom';

export default function Flyout() {
	const [active, setActive] = useState('home');
	return (
		<MobileMenu>
			<LinkContainer>
				<MenuLink onClick={() => setActive('home')} active={active === 'home'}>
					<Link to='/'>Lodging</Link>
					{/* <Link to='/'>
						{active === 'home' ? (
							<>
								<img src={homeActive} alt='' />
							</>
						) : (
							<>
								<img src={homeInactive} alt='' />
							</>
						)}
						<p>Home</p>
					</Link> */}
				</MenuLink>
				<MenuLink
					onClick={() => setActive('details')}
					active={active === 'details'}
				>
					<Link to='/'>Lodging</Link>
					{/* <Link to='/details'>
						{active === 'details' ? (
							<>
								<img src={infoActive} alt='' />
							</>
						) : (
							<>
								<img src={infoInactive} alt='' />
							</>
						)}
						<p>Details</p>
					</Link> */}
				</MenuLink>
				<MenuLink
					onClick={() => setActive('lodging')}
					active={active === 'lodging'}
				>
					<Link to='/'>Lodging</Link>
					{/* <Link to='/lodging'>
						{active === 'lodging' ? (
							<>
								<img src={sleepingActive} alt='' />
							</>
						) : (
							<>
								<img src={sleepingInactive} alt='' />
							</>
						)}
						<p>Lodging</p>
					</Link> */}
				</MenuLink>
				<MenuLink
					onClick={() => setActive('registry')}
					active={active === 'registry'}
				>
					<Link to='/'>Lodging</Link>
					{/* <Link to='/registry'>
						{active === 'registry' ? (
							<>
								<img src={giftActive} alt='' />
							</>
						) : (
							<>
								<img src={giftInactive} alt='' />
							</>
						)}
						<p>Registry</p>
					</Link> */}
				</MenuLink>
				<MenuLink onClick={() => setActive('rsvp')} active={active === 'rsvp'}>
					<Link to='/'>Lodging</Link>
					{/* <Link to='/rsvp'>
						{active === 'rsvp' ? (
							<>
								<img src={rsvpActive} alt='' />
							</>
						) : (
							<>
								<img src={rsvpInactive} alt='' />
							</>
						)}
						<p>RSVP</p>
					</Link> */}
				</MenuLink>
			</LinkContainer>
		</MobileMenu>
	);
}
