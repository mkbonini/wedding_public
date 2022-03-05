/** @format */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP/index';
import Details from '../../views/Details';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging';
import Flyout from './Flyout';

export default function Navigation() {
	return (
		<>
			{/* <Flyout /> */}
			<Switch>
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
		</>
	);
}
