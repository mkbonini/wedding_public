/** @format */

import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation';
import { Heading, Footer } from './styled-components';

export default function Body() {
	const history = useHistory();

	return (
		<>
			<Heading>
				<h3 onClick={() => history.push('/')}>M + M</h3>
			</Heading>
			<Navigation />
			<Footer>
				<p> 2023 - Bailey, CO </p>
			</Footer>
		</>
	);
}
