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

const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	h3 {
		width: 100%;
		text-align: center;
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
		font-size: 50px;
		margin: 40px 0px 10px 0px;
	}
	p {
		width: 100%;
		text-align: center;
		font-family: 'Urbanist', sans-serif;
		font-weight: 500;
		font-size: 20px;
		margin: 0px 0px 10px 0px;
	}
`;

export default function Home() {
	return (
		<HomePage className='App'>
			<Title>
				<h3>{`MIKE & MIWHA`}</h3>
				<p> JULY 21-23, 2023 | BAILEY, CO</p>
			</Title>
			<Hero />
			<Countdown />
		</HomePage>
	);
}
