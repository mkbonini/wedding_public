/** @format */
import { Switch, Route } from 'react-router-dom';
import Home from '../../views/Home';
import RSVP from '../../views/RSVP/index';
import Details from '../../views/Details/index';
import Registry from '../../views/Registry';
import Lodging from '../../views/Lodging/index';
import FAQ from '../../views/FAQ/index';

import Flyout from './Flyout';

export default function Navigation({ visible, setVisible }) {
	return (
		<>
			<Flyout visible={visible} setVisible={setVisible} />
			<Switch>
				<Route path='/schedule'>
					<Details visible={visible} />
				</Route>
				<Route path='/rsvp'>
					<RSVP visible={visible} />
				</Route>
				<Route path='/registry'>
					<Registry visible={visible} />
				</Route>
				<Route path='/lodging'>
					<Lodging visible={visible} />
				</Route>
				<Route path='/faq'>
					<FAQ visible={visible} />
				</Route>
				<Route path='/'>
					<Home visible={visible} />
				</Route>
			</Switch>
		</>
	);
}
