/** @format */
import React, { useEffect, useRef, useState } from 'react';
import { FlyoutContainer, MenuLink, LinkContainer } from './styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP';
import OurStory from '../../views/OurStory';
import Details from '../../views/Details';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging';
import heartInactive from '../../assets/heart-inactive.png';
import heartActive from '../../assets/heart-active.png';
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

export default function Flyout({ visible, setVisible }) {
	const [active, setActive] = useState('home');

	const ref = useRef();
	useOnClickOutside(ref, () => setVisible(false));
	function useOnClickOutside(ref, handler) {
		useEffect(() => {
			const listener = (event) => {
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		}, [ref, handler]);
	}

	return (
		<>
			<Router>
				<FlyoutContainer ref={ref}>
					<LinkContainer>
						<MenuLink onClick={() => setActive('home')}>
							<Link to='/'>
								{active === 'home' ? (
									<img src={homeActive} alt='' />
								) : (
									<img src={homeInactive} alt='' />
								)}
								Home
							</Link>
						</MenuLink>
						{/* <MenuLink onClick={() => setActive('our-story')}>
							<Link to='/our-story'>
								{active === 'our-story' ? (
									<img src={heartActive} alt='' />
								) : (
									<img src={heartInactive} alt='' />
								)}
								Our Story
							</Link>
						</MenuLink> */}
						<MenuLink onClick={() => setActive('details')}>
							<Link to='/details'>
								{active === 'details' ? (
									<img src={infoActive} alt='' />
								) : (
									<img src={infoInactive} alt='' />
								)}
								Info
							</Link>
						</MenuLink>
						<MenuLink onClick={() => setActive('lodging')}>
							<Link to='/lodging'>
								{active === 'lodging' ? (
									<img src={sleepingActive} alt='' />
								) : (
									<img src={sleepingInactive} alt='' />
								)}
								Lodging
							</Link>
						</MenuLink>
						<MenuLink onClick={() => setActive('registry')}>
							<Link to='/registry'>
								{active === 'registry' ? (
									<img src={giftActive} alt='' />
								) : (
									<img src={giftInactive} alt='' />
								)}
								Registry
							</Link>
						</MenuLink>
						<MenuLink onClick={() => setActive('rsvp')}>
							<Link to='/rsvp'>
								{active === 'rsvp' ? (
									<img src={rsvpActive} alt='' />
								) : (
									<img src={rsvpInactive} alt='' />
								)}
								RSVP
							</Link>
						</MenuLink>
					</LinkContainer>
				</FlyoutContainer>

				<Switch>
					<Route path='/our-story'>
						<OurStory />
					</Route>
					<Route path='/details'>
						<Details />
					</Route>
					<Route path='/rsvp'>
						<RSVP />
					</Route>
					<Route path='/registry'>
						<Registry />
					</Route>
					<Route path='/lodging'>
						<Lodging />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
