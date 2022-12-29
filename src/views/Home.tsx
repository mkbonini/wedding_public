/** @format */

import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import deerCreek from '../assets/deer_creek.jpg';
import miwha from '../assets/bailey_sign.jpg';
import ContentBlock from '../components/ContentBlock';
import Button from '../components/Button';
import Counntdown from '../components/Countdown';
import flowerFooter from '../assets/flower-footer.svg';
import { useHistory } from 'react-router-dom';

const HomePage = styled.div<{ visible: boolean }>`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: -4rem;
	overflow: hidden;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
	h1 {
		text-align: center;
		font-size: 45px;
		color: #03989e;
	}
	@media only screen and (max-width: 900px) {
		margin-bottom: 0;
	}
`;

const StoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1400px;
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
	font-family: 'Circular-Book';
	@media only screen and (max-width: 900px) {
		font-size: 40px;
		line-height: 30px;
		max-width: 300px;
	}
`;

const CountdownContainer = styled.div`
	height: 400px;
	width: 100%;
	max-width: 900px;
	background-color: #e6eafe;
	margin-bottom: 4rem;
	@media only screen and (max-width: 900px) {
		margin-bottom: 0;
	}
`;

const FlowerContainer = styled.div`
	display: block;
	position: relative;
	top: -150px;
	img {
		max-width: 1021px;
	}
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export default function Home({ visible }) {
	const history = useHistory();
	return (
		<>
			<HomePage visible={visible}>
				<Hero />
				<StoryContainer>
					<TitleContainer>
						<Title>we're getting married!</Title>
						<Button
							text='LEARN MORE'
							onClick={() => history.push('/details')}
						/>
					</TitleContainer>
					<CountdownContainer>
						<Counntdown />
					</CountdownContainer>
					<ContentBlock
						image={miwha}
						alt='miwha at gardens'
						copy='bailey,co'
						backgroundColor='#E6F4FE'
						copyColor='#3366FF'
						imagePosition='right'
						type='copy'
						id='miwha'
					/>
					<ContentBlock
						image={deerCreek}
						alt='mike at balloon festival'
						type='copy'
						copy='july 21-23, 2023'
						backgroundColor='#3366FF'
						copyColor='#ffffff'
						imagePosition='left'
						id='mike'
					/>
				</StoryContainer>
				<FlowerContainer>
					<img src={flowerFooter} alt='' />
				</FlowerContainer>
			</HomePage>
		</>
	);
}
