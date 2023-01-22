/** @format */
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP/index';
import Schedule from '../../views/Schedule/index';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging/index';
import FAQ from '../../views/FAQ/index';
import OurStory from '../../views/OurStory';
import Travel from '../../views/Travel';

export default function Navigation() {
	return (
		<Switch>
			<Route path='/our-story'>
				<OurStory />
			</Route>
			<Route path='/schedule'>
				<Schedule />
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
			<Route path='/travel'>
				<Travel />
			</Route>
			<Route path='/faq'>
				Travel
				<FAQ />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
		</Switch>
	);
}
