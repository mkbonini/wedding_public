/** @format */

import React from 'react';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import styled from 'styled-components';
import Hr from '../components/Hr';

const HomePage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: aliceblue;
	padding-bottom: 8rem;
`;

const StoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 30px;
		color: #000;
		font-weight: 800;
		text-transform: uppercase;
		text-align: left;
		margin-left: 2rem;
	}
	h3 {
		font-family: 'Urbanist', sans-serif;
		font-size: 20px;
		color: #000;
		font-weight: 800;
		text-transform: uppercase;
		text-align: center;
		padding: 20px 0px 0px;
		margin: 0;
	}
	p {
		padding: 0px 20px;
	}
`;

const Bubble = styled.div`
	height: 100%;
	max-width: 700px;
	background-color: white;
	border-radius: 5px;
	position: relative;
	margin: 2rem;
	&#left {
		align-self: flex-start;
		border: 3px dashed #ef7b9e;
	}
	&#right {
		align-self: flex-end;
		border: 3px dashed #03989e;
	}
`;

const Wave = styled.div`
	&#wave {
		position: relative;
		height: 70px;
		width: 100%;
		background: #e0efe3;
	}
`;
export default function Home() {
	return (
		<>
			<HomePage className='App'>
				<Hero />
				<Hr />
				<StoryContainer>
					<h1>Our Story</h1>
					<Bubble id='left'>
						<h3>MG</h3>
						<p>
							{/* Mike and I first met in June of 2013 right on the front steps of my
						family home. He was road tripping with friends, and through a
						mututal friend (shoutout Emily!) got set up to stay with me. He got
						to my place late - but I remember walking out the door and seeing
						him standing on the sidewalk getting his things out of a tiny honda
						civic in a hawaiian t-shirt.
						<br />
						<br />I smiled, walked up and said hi. We exchanged a hug. We have a
						lot of mutual friends, but somehow our paths never crossed, so I was
						really excited to meet Mike.
						<br />
						The next day we were completely inseperable. I'm not sure what we
						talked about - all I remember is how much I laughed and smiled being
						with him.
						<br />
						<br />
						After half a year of talking, I eventually told him I felt about
						him. He felt the same, and now 9+ years together we have shared 2
						dogs, a home, a lot of love, laughter, tears, growth, struggles. I
						think back to that moment we met at my home and I remember that
						feeling I had. It's really never gone away - even through the hard
						times I know we are tied together in a way I cant explain. And
						though I can't explain it I am just grateful for it and so happy I
						get to spend my life with him. */}
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</Bubble>
					<Bubble id='right'>
						{' '}
						<h3>MB</h3>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source.
							<br />
							<br />
							Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
							Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
							written in 45 BC. This book is a treatise on the theory of ethics,
							very popular during the Renaissance. The first line of Lorem
							Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
							section 1.10.32.
						</p>
					</Bubble>
				</StoryContainer>
				<Countdown />
			</HomePage>
			<Wave id='wave' />
		</>
	);
}
