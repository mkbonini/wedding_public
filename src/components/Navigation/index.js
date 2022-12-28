/** @format */
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP/index';
import Details from '../../views/Details/index';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging/index';
import FAQ from '../../views/FAQ/index';
import OurStory from '../../views/OurStory';
import Map from '../../views/Map';

export default function Navigation() {
	return (
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
			<Route path='/map'>
				<Map />
			</Route>
			<Route path='/faq'>
				<FAQ />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
		</Switch>
	);
}
