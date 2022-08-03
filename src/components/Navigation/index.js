/** @format */
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP/index';
import Details from '../../views/Details/index';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging/index';
import FAQ from '../../views/FAQ/index';

export default function Navigation({ flyoutVisible }) {
	return (
		<Switch>
			<Route path='/details'>
				<Details flyoutVisible={flyoutVisible} />
			</Route>
			<Route path='/rsvp'>
				<RSVP flyoutVisible={flyoutVisible} />
			</Route>
			<Route path='/registry'>
				<Registry flyoutVisible={flyoutVisible} />
			</Route>
			<Route path='/lodging'>
				<Lodging flyoutVisible={flyoutVisible} />
			</Route>
			<Route path='/faq'>
				<FAQ flyoutVisible={flyoutVisible} />
			</Route>
			<Route path='/'>
				<Home flyoutVisible={flyoutVisible} />
			</Route>
		</Switch>
	);
}
