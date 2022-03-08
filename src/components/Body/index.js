/** @format */

import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import { Heading, Footer } from './styled-components';
import hamburger from '../../assets/hamburger.png';
import { debounce } from '../../utils/index';

export default function Body() {
	const history = useHistory();
	const myStorage = window.localStorage;

	//flyout Visible state
	const [visible, setVisible] = useState(false);
	const [admin, setAdmin] = useState(false);
	//Nav Heading Visible State
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [scrollVisible, setScrollVisible] = useState(true);

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

	useEffect(() => {
		if (admin) {
			myStorage.setItem('admin_view', true);
		} else {
			myStorage.removeItem('admin_view');
		}
	}, [admin, myStorage]);

	return (
		<>
			<Heading scrollVisible={scrollVisible} admin={admin}>
				{admin && (
					<img
						src={hamburger}
						alt='hamburger'
						onClick={() => setVisible(!visible)}
					/>
				)}
				<h3 onClick={() => history.push('/')}>M + M</h3>
			</Heading>
			<Navigation visible={visible} setVisible={setVisible} />
			<Footer>
				<p> 2023 - Bailey, CO </p>
				<div onClick={() => setAdmin(!admin)}>♡</div>
			</Footer>
		</>
	);
}
