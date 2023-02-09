/** @format */
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import deerCreek from '../assets/deer_creek.jpg';
import miwha from '../assets/bailey_sign.jpg';
import hero from '../assets/hero.png';
import mobile from '../assets/mobile.png';
import { ContentBlock, Button, Countdown } from '../components/index';

const HomePage = styled.div<{ visible: boolean }>`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	padding-bottom: 5rem;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
	h1 {
		text-align: center;
		font-size: 45px;
		color: #03989e;
		margin-bottom: 1rem;
	}
	@media only screen and (max-width: 1200px) {
		margin-bottom: 0;
		padding-bottom: 0;
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
	align-items: flex-start;
	padding: 10rem 6rem 6rem 6rem;
	@media only screen and (max-width: 1200px) {
		align-items: center;
		padding: 1rem;
	}
`;
const Title = styled.div`
	text-align: left;
	font-size: 70px;
	line-height: 60px;
	font-family: 'Lazydog';
	color: #242424;
	padding-bottom: 2rem;
	@media only screen and (max-width: 1200px) {
		font-size: 50px;
		max-width: 350px;
		line-height: 40px;
		text-align: center;
	}
`;

const CountdownContainer = styled.div`
	height: 400px;
	width: 100%;
	max-width: 1000px;
	background-color: #e6eafe;
	margin: 3rem 0rem 4rem 0rem;
	@media only screen and (max-width: 900px) {
		margin: 0;
	}
`;

const HeroSection = styled.div`
	padding-top: 2rem;
	width: 100%;
	max-width: 1500px;
	height: 660px;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 1200px) {
		border: none;
		flex-direction: column-reverse;
		height: unset;
		box-shadow: none;
	}
	.copy-section {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 40%;
		height: 100%;
		@media only screen and (max-width: 1200px) {
			padding-top: 5rem;
			justify-content: center;
			width: 100%;
			height: 360px;
			justify-content: center;
		}
	}
	.image-section {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #bd83c1;
		width: 60%;
		height: 100%;
		position: relative;
		.desktop {
			display: none;
			@media only screen and (min-width: 1201px) {
				display: block;
				position: absolute;
				width: 940px;
				top: 50px;
				left: 0;
				margin: 2.5rem 0rem 0rem -7rem;
			}
		}
		.mobile {
			display: block;
			padding-top: 6rem;
			position: absolute;
			width: 350px;
			top: 1%;
			@media only screen and (min-width: 1201px) {
				display: none;
			}
		}
		@media only screen and (max-width: 1200px) {
			width: 100%;
			height: 400px;
		}
	}
`;

export default function Home({ visible }) {
	const history = useHistory();
	return (
		<>
			<HomePage visible={visible}>
				<HeroSection>
					<div className='copy-section'>
						<TitleContainer>
							<Title>we're getting married!</Title>
							<Button
								text='LEARN MORE'
								onClick={() => history.push('/schedule')}
							/>
						</TitleContainer>
					</div>
					<div className='image-section'>
						<img src={hero} alt='' className='desktop' />
						<img src={mobile} alt='' className='mobile' />
					</div>
				</HeroSection>
				<StoryContainer>
					<CountdownContainer>
						<Countdown />
					</CountdownContainer>
					<ContentBlock
						image={deerCreek}
						alt='deer creek'
						copy='May 18-21, 2040'
						backgroundColor='#E6F4FE'
						copyColor='#3366FF'
						imagePosition='right'
						type='copy'
						id='miwha'
					/>
					<ContentBlock
						image={miwha}
						alt='bailey sign'
						type='copy'
						copy='bailey,co'
						backgroundColor='#BD83C1'
						copyColor='#ffffff'
						imagePosition='left'
						id='mike'
					/>
				</StoryContainer>
			</HomePage>
		</>
	);
}
