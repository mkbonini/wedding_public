/** @format */

import React from 'react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import styled from 'styled-components';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';

const HomePage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: floralwhite;
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

const MiwhaContentBlock = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;
	background-color: darkcyan;
	p {
		color: white;
		font-size: 30px;
		padding: 20px;
	}
	img {
		width: 50%;
	}
	div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		img {
			width: 100%;
		}
		div {
			width: 100%;
			min-height: 350px;
		}
	}
`;

const MikeContentBlock = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: floralwhite;
	img {
		width: 50%;
	}
	div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		p {
			max-width: 400px;
		}
	}
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		img {
			width: 100%;
		}
		div {
			width: 100%;
		}
	}
`;

export default function Home() {
	return (
		<>
			<HomePage className='App'>
				<Hero />
				<StoryContainer>
					<MiwhaContentBlock>
						<img src={miwha} alt='' />
						<div>
							<p>MORE COMING SOON</p>
						</div>
					</MiwhaContentBlock>
					<MikeContentBlock>
						<img src={mike} alt='' id='mike-img' />
						<div>
							<Countdown />
						</div>
					</MikeContentBlock>
				</StoryContainer>
			</HomePage>
		</>
	);
}
