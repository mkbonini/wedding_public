/** @format */

import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';
import ContentBlock from '../components/ContentBlock';

const HomePage = styled.div<{ visible: boolean }>`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: floralwhite;
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
	width: 100%;
`;

export default function Home({ visible }) {
	return (
		<>
			<HomePage visible={visible}>
				<Hero />
				<StoryContainer>
					<ContentBlock
						image={miwha}
						alt='miwha at gardens'
						copy='MORE COMING SOON'
						backgroundColor='darkcyan'
						copyColor='white'
						imagePosition='right'
						countdown={false}
						id='miwha'
					/>
					<ContentBlock
						image={mike}
						alt='mike at balloon festival'
						countdown={true}
						backgroundColor='floralwhite'
						copyColor='black'
						imagePosition='left'
						id='mike'
					/>
				</StoryContainer>
			</HomePage>
		</>
	);
}
