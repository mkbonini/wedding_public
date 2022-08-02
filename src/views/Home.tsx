/** @format */

import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';
import ContentBlock from '../components/ContentBlock';
import Button from '../components/Button';
import Counntdown from '../components/Countdown';

const HomePage = styled.div<{ visible: boolean }>`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
	h1 {
		text-align: center;
		font-size: 45px;
		color: #03989e;
	}
`;

const StoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1400px;
	padding-bottom: 300px;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;
const Title = styled.div`
	text-align: center;
	font-size: 70px;
	max-width: 600px;
	line-height: 55px;
	margin: auto;
`;

const CountdownContainer = styled.div`
	height: 400px;
	width: 100%;
	max-width: 900px;
	background-color: #e6eafe;
	margin-bottom: 4rem;
`;
export default function Home({ visible }) {
	return (
		<>
			<HomePage visible={visible}>
				<Hero />
				<StoryContainer>
					<TitleContainer>
						<Title>we're getting married!</Title>
						<Button text='learn more' />
					</TitleContainer>
					<CountdownContainer>
						<Counntdown />
					</CountdownContainer>
					<ContentBlock
						image={miwha}
						alt='miwha at gardens'
						copy='bailey,co'
						backgroundColor='#F5F5F5'
						copyColor='#3366FF'
						imagePosition='right'
						type='copy'
						id='miwha'
					/>
					<ContentBlock
						image={mike}
						alt='mike at balloon festival'
						type='copy'
						copy='july 21-23, 2023'
						backgroundColor='#3366FF'
						copyColor='#ffffff'
						imagePosition='left'
						id='mike'
					/>
				</StoryContainer>
			</HomePage>
		</>
	);
}
