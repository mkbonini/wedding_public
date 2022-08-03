/** @format */

import { useState } from 'react';
import Navigation from '../Navigation';
import { Footer } from './styled-components';
import Navbar from '../Navigation/Navbar';
import Flyout from '../Navigation/Flyout';

export default function Body() {
	const [flyoutVisible, setFlyoutVisible] = useState(false);
	return (
		<>
			<Navbar
				flyoutVisible={flyoutVisible}
				setFlyoutVisible={setFlyoutVisible}
			/>
			<Flyout
				flyoutVisible={flyoutVisible}
				setFlyoutVisible={setFlyoutVisible}
			/>
			<Navigation flyoutVisible={flyoutVisible} />
			<Footer>
				<p> developed by m + m </p>
			</Footer>
		</>
	);
}
