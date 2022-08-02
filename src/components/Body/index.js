/** @format */

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import { Heading, Footer } from './styled-components';
import hamburger from '../../assets/hamburger.png';
import { debounce } from '../../utils/index';

export default function Body() {
	const history = useHistory();

	//flyout Visible state
	const [visible, setVisible] = useState(false);

	//Nav Heading Visible State
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [scrollVisible, setScrollVisible] = useState(true);

	const flyout = () => {
		setVisible(!visible);
		console.log(visible, 'visible');
	};

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;
		setScrollVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);
		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll, prevScrollPos, scrollVisible]);

	useEffect(() => {
		if (visible) {
			document.getElementById('content').classList.add('disable');
		} else {
			document.getElementById('content').classList.remove('disable');
		}
	}, [visible]);

	return (
		<>
			<Heading scrollVisible={scrollVisible}>
				<img src={hamburger} alt='hamburger' onClick={() => flyout()} />
				<h3 onClick={() => history.push('/')}>M + M</h3>
			</Heading>
			<Navigation visible={visible} setVisible={setVisible} />
			<Footer>
				<p> developed by m + m </p>
			</Footer>
		</>
	);
}
