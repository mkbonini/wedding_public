/** @format */

import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';

const StoryContainer = styled.div`
	h3 {
		font-family: 'Urbanist', sans-serif;
		font-size: 24px;
		color: #000;
		font-weight: 200;
		text-transform: uppercase;
		padding: 0px 20px;
	}
	p {
		padding: 0px 20px;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 45px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

const ImageContainer = styled.div`
	max-width: 450px;
	padding: 1rem;
	img {
		width: 100%;
	}
`;

const ImageSection = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
`;

export default function OurStory() {
	return (
		<StoryContainer>
			<Title>
				<h1>Our Story</h1>
			</Title>
			<ImageSection>
				<ImageContainer>
					<img src='https://i.ibb.co/pKchLfy/IMG-5645.jpg;=' alt='IMG-5645' />
				</ImageContainer>
				<ImageContainer>
					<img src='https://i.ibb.co/P411nD3/IMG-2756.jpg' alt='IMG-5645' />
				</ImageContainer>
				<ImageContainer>
					<img src='https://i.ibb.co/f2zL35x/IMG-2541.jpg' alt='IMG-5645' />
				</ImageContainer>
			</ImageSection>
			<h3>Miwha's Side</h3>
			<p>
				Mike and I first met in June of 2013 right on the front steps of my
				family home. He was road tripping with friends, and through a mututal
				friend (shoutout Emily!) got set up to stay with me. He got to my place
				late - but I remember walking out the door and seeing him standing on
				the sidewalk getting his things out of a tiny honda civic in a hawaiian
				t-shirt.
				<br />
				<br />I smiled, walked up and said hi. We exchanged a hug and all I
				remember is being so happy that we were meeting. We have a lot of mutual
				friends, but somehow our paths never crossed. Finally they were and at
				my childhood house, and I just felt connected to him in a way I wasn't
				expecting to feel. <br />
				<br />
				Anyways, I couldn't much explain it, but the next day we hung out and we
				were completely inseperable. It was strange but I felt like I knew him
				my whole life, like he was already my best friend. I'm not even sure
				what we talked about - all I remember is how much I laughed and smiled
				being with him.
				<br />
				<br />
				He continued his road trip, and months passed and our lives went in
				seperate directions. We kept talking online but still we were just
				friends. Later that summer we ended up going to a church event called
				Sports fest on the east coast where we met in person again.
				<br />
				<br />
				Sorry to Hope & Joe who were with us, because literally the world around
				us disapeared when we ran into each other and that's when I knew 'wow I
				reallllly like him'. And I really knew it. I was actually seeing
				somebody at this point, but I called later that day and ended things.
				<br />
				<br /> Anyways I eventually told Mike how I felt. It wasn't until months
				later, and not in the most graceful of ways. I left a voicemail and may
				or may not have been pretty drunk. He then proceeded to NOT tell me he
				felt the same way for three days. THREE DAYS.
				<br />
				<br />
				Eventually he told me he felt the same and the rest is history. 9+ years
				together, 2 dogs, a home, a lot of love, laughter, tears, growth,
				struggles. I think back to that moment we met at my home and I remember
				that feeling I had. It's really never gone away - even through the hard
				times I know we are tied together in a way I cant explain. And though I
				can't explain it I am just grategul for it and so happy I get to spend
				my life with him.
			</p>
			<h3>Mike'se Side</h3>
			<p></p>
		</StoryContainer>
	);
}
