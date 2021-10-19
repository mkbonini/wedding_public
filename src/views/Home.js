/** @format */

import React from 'react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import styled from 'styled-components';

const HomePage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export default function Home() {
	return (
		<HomePage className='App'>
			<Hero />
			{/* <Countdown /> */}
		</HomePage>
	);
}
