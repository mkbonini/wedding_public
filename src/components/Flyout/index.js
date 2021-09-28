/** @format */
import React, { useEffect, useRef } from 'react';
import { FlyoutContainer, MenuLink, LinkContainer } from './styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP';
import OurStory from '../../views/OurStory';
import Details from '../../views/Details';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging';

export default function Flyout({ visible, setVisible }) {
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
				{visible && (
					<FlyoutContainer ref={ref}>
						<LinkContainer>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/'>
									Home
								</Link>
							</MenuLink>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/our-story'>
									Our Story
								</Link>
							</MenuLink>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/details'>
									The Tails
								</Link>
							</MenuLink>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/lodging'>
									{'Lodging'}
								</Link>
							</MenuLink>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/registry'>
									Registry
								</Link>
							</MenuLink>
							<MenuLink>
								<Link onClick={() => setVisible(false)} to='/rsvp'>
									RSVP
								</Link>
							</MenuLink>
						</LinkContainer>
					</FlyoutContainer>
				)}
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
