/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';

const PageTitle = styled.div`
	font-family: 'Circular-Book';
	font-size: 22px;
	align-self: center;
	text-align: center;
	min-width: 200px;
	margin: 1rem 0rem 2rem -1rem;
	padding: 25px;
	box-shadow: 12px 12px 1px 0px #242424;
	text-transform: uppercase;
	border: 1px solid black;
	@media only screen and (max-width: 900px) {
		font-size: 18px;
		text-align: center;
	}
`;

const OurStoryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 7rem;
	@media only screen and (min-width: 900px) {
		padding-top: 11rem;
	}
`;

const ImageContainer = styled.div`
	max-width: 500px;
	display: block;
	max-height: 545px;
	&.miwha {
		margin-left: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: 50px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: 21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	&.mike {
		margin-right: -2rem;
		img {
			width: 100%;
			margin-top: -450px;
			margin-left: -50px;
			@media only screen and (max-width: 1000px) {
				margin-top: -306px;
				margin-left: -21px;
			}
		}
		&::before {
			content: '';
			height: 500px;
			width: 500px;
			background-color: #a9beff;
			display: block;
			position: relative;
			z-index: -1;
			@media only screen and (max-width: 1000px) {
				height: 325px;
				width: 325px;
			}
		}
	}
	@media only screen and (max-width: 1000px) {
		max-width: 325px;
		padding-bottom: 2rem;
	}
`;

const ContentSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
`;

const AboutSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	max-width: 1200px;
	min-height: 700px;

	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		&.accent {
			flex-direction: column-reverse;
		}
	}
`;

const Accent = styled.div`
	height: 0.5rem;
	width: 100px;
	margin: 0;
	&.miwha {
		background-color: #c9e265;
	}
	&.mike {
		background-color: #ff99ff;
	}
`;
const Story = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		margin: 0;
		height: 55px;
		font-family: 'Lazydog';
	}
	p {
		max-width: 450px;
		padding: 1rem;
	}
	&.content-left {
		margin-right: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-right: 0;
		}
	}
	&.content-right {
		margin-left: 6rem;
		@media only screen and (max-width: 1000px) {
			margin-left: 0;
		}
	}
`;

const Background = styled.div`
	background-color: rgba(169, 190, 255, 0.17);
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4rem 0rem;
`;

export default function OurStory() {
	return (
		<OurStoryPage>
			<ContentSection>
				<PageTitle>Our Story</PageTitle>
				<AboutSection>
					<ImageContainer className='miwha'>
						<img src={miwha} alt='' />
					</ImageContainer>
					<Story className='content-right'>
						<h1>miwha's side</h1>
						<Accent className='miwha' />
						<p>
							Mike and I met in the summer of 2013, when he did a road trip with
							friends and stayed at my place along the way. We had many
							opportunities to meet prior to this since we had similar friends
							from a gap year program we did after high school on the east
							coast. Yet somehow our paths never crossed. The first time I saw
							him, he was wearing an oversized Hawaiian shirt with mismatched
							gym shorts, and very much looked like somebody who had spent the
							last week road tripping in the back of a Honda Civic. <br />
							<br />
							The long week road trip smell was no match to the connection we
							had, which was immediate. I was so excited to see Mike, and the
							next few days while he was in CO we were inseparable. He was
							sarcastic and hilarious and I couldn’t stop smiling after our
							interactions. I laughed so much when I was with him. From there we
							stayed in touch, just as friends. It wasn’t until I saw him again
							later in the summer that I realized just how important Mike was to
							me.
							<br />
							<br />A few months passed and I finally told him how I felt.
							Luckily at this point he felt the same way and the rest is history
							:)
						</p>
					</Story>
				</AboutSection>
				<Background>
					<AboutSection className='accent'>
						<Story className='content-left'>
							<h1>michael's side</h1>
							<Accent className='mike' />
							<p>
								I don’t know why but I was really excited to meet Miwha. The
								first time we met I was on a road trip with Aaron and Elliot
								Smith and we were planning to spend the night at Miwha’s family
								house in Colorado on our way from Pennsylvania to California.
								Miwha and I had known of each other from life as Moonies but had
								never actually met. We were only staying with Miwha because of a
								mutual friend, Emily Cornier, who connected us when I reached
								out for a place to stay. <br />
								<br />
								The Smiths and I were driving long hours from Indianapolis to
								get into Denver late at night, we were tired. I remember seeing
								her smiling face in the moonlight as I stepped out of the car
								that first night, I felt awake. I was really excited to meet
								Miwha. <br /> <br />
								The next day we hung out as a group but it was like no one else
								existed. Years have past since then, but even now Miwha has a
								way of captivating me. I continue to find myself in awe of her
								strength, creativity, and beauty. Together we have built a life
								with laughter and joy and I am grateful to have her as my
								partner. I am glad you will be there to celebrate the start of
								our next chapter. Let’s Party!
							</p>
						</Story>
						<ImageContainer className='mike'>
							<img src={mike} alt='' />
						</ImageContainer>
					</AboutSection>
				</Background>
			</ContentSection>
		</OurStoryPage>
	);
}
