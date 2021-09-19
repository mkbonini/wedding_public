/** @format */
import React from 'react';
import { FlyoutContainer, MenuLink, LinkContainer } from './styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP';
import OurStory from '../../views/OurStory';
import Details from '../../views/Details';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging';

export default function Navbar({ visible }) {
	return (
		<>
			<Router>
				{visible && (
					<FlyoutContainer>
						<LinkContainer>
							<MenuLink>
								<Link to='/'>Home</Link>
							</MenuLink>
							<MenuLink>
								<Link to='/our-story'>Our Story</Link>
							</MenuLink>
							<MenuLink>
								<Link to='/details'>The Tails</Link>
							</MenuLink>
							<MenuLink>
								<Link to='/lodging'>{'Lodging & Food'}</Link>
							</MenuLink>
							<MenuLink>
								<Link to='/registry'>Registry</Link>
							</MenuLink>
							<MenuLink>
								<Link to='/rsvp'>RSVP</Link>
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
