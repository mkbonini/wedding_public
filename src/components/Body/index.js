/** @format */

import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import { Heading, Footer } from './styled-components';
import Navbar from '../Navigation/Navbar';

export default function Body() {
	//flyout Visible state
	const [visible, setVisible] = useState(false);

	const flyout = () => {
		setVisible(!visible);
		console.log(visible, 'visible');
	};

	useEffect(() => {
		if (visible) {
			document.getElementById('content').classList.add('disable');
		} else {
			document.getElementById('content').classList.remove('disable');
		}
	}, [visible]);

	return (
		<>
			{/* <Heading scrollVisible={scrollVisible}> */}
			<Navbar />
			{/* </Heading> */}
			<Navigation visible={visible} setVisible={setVisible} />
			<Footer>
				<p> developed by m + m </p>
			</Footer>
		</>
	);
}
