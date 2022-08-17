/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import UnderConstruction from '../components/UnderConstruction';
import Breadcrumbs from '../components/Breadcrumbs';
import mike from '../assets/mike.jpg';
import miwha from '../assets/miwha.jpg';

const RegistryPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 8rem;
`;

const ImageContainer = styled.div`
	max-width: 500px;
	display: block;
	max-height: 545px;
	@media only screen and (max-width: 900px) {
		max-height: 335px;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
`;

const ContentSection = styled.div`
	display: flex;
	flex-direction: row;
	padding: 3rem 0rem;

	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}
`;

const AboutSection = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
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
	height: 900px;
	margin-top: 20px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid darkgray;
	border-radius: 2px;
	h1 {
		margin: 0;
		padding-top: 4rem;
		height: 80px;
	}
	p {
		max-width: 450px;
		padding: 1rem;
	}
`;

export default function OurStory() {
	const [underConstruction, setUnderConstruction] = useState(false);
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<RegistryPage>
					<Breadcrumbs location={'our story'} />
					<ContentSection>
						<AboutSection>
							<ImageContainer className='miwha'>
								<img src={miwha} alt='' />
							</ImageContainer>
							<Story className='miwha'>
								<h1>miwhas's side</h1>
								<Accent className='miwha' />
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
									porta a velit at porttitor. Phasellus ultrices enim id justo
									eleifend, ac pellentesque sapien interdum. Proin accumsan,
									dolor porta auctor eleifend, leo ipsum hendrerit arcu, et
									facilisis mauris arcu id sem. Phasellus tempor nisi vitae
									lectus malesuada, eu viverra neque congue. Nam sapien massa,
									dapibus nec varius sed, tempor quis diam. Fusce eget hendrerit
									nunc.
									<br /> <br />
									In at ante eget arcu hendrerit finibus. Morbi quis blandit
									augue. Duis faucibus condimentum sapien at fringilla.
									Pellentesque mollis, velit eu accumsan consequat, metus urna
									vestibulum justo, sodales eleifend orci turpis in nibh. Mauris
									gravida eget lectus vitae posuere.
									<br /> <br />
									Curabitur rutrum fringilla velit, et pretium odio faucibus et.
									Nulla viverra velit vel lorem rutrum, ut pulvinar est
									hendrerit. Curabitur eget iaculis purus. Praesent vitae tempus
									est.
									<br /> <br />
									In at ante eget arcu hendrerit finibus. Morbi quis blandit
									augue. Duis faucibus condimentum sapien at fringilla.
									Pellentesque mollis, velit eu accumsan consequat, metus urna
									vestibulum justo, sodales eleifend orci turpis in nibh. Mauris
									gravida eget lectus vitae posuere.
								</p>
							</Story>
						</AboutSection>
						<AboutSection>
							<ImageContainer>
								<img src={mike} alt='' />
							</ImageContainer>
							<Story className='mike'>
								<h1>mike's side</h1>
								<Accent className='mike' />
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
									porta a velit at porttitor. Phasellus ultrices enim id justo
									eleifend, ac pellentesque sapien interdum. Proin accumsan,
									dolor porta auctor eleifend, leo ipsum hendrerit arcu, et
									facilisis mauris arcu id sem. Phasellus tempor nisi vitae
									lectus malesuada, eu viverra neque congue. Nam sapien massa,
									dapibus nec varius sed, tempor quis diam. Fusce eget hendrerit
									nunc.
									<br /> <br />
									In at ante eget arcu hendrerit finibus. Morbi quis blandit
									augue. Duis faucibus condimentum sapien at fringilla.
									Pellentesque mollis, velit eu accumsan consequat, metus urna
									vestibulum justo, sodales eleifend orci turpis in nibh. Mauris
									gravida eget lectus vitae posuere.
									<br /> <br />
									Curabitur rutrum fringilla velit, et pretium odio faucibus et.
									Nulla viverra velit vel lorem rutrum, ut pulvinar est
									hendrerit. Curabitur eget iaculis purus. Praesent vitae tempus
									est.
									<br /> <br />
									In at ante eget arcu hendrerit finibus. Morbi quis blandit
									augue. Duis faucibus condimentum sapien at fringilla.
									Pellentesque mollis, velit eu accumsan consequat, metus urna
									vestibulum justo, sodales eleifend orci turpis in nibh. Mauris
									gravida eget lectus vitae posuere.
								</p>
							</Story>
						</AboutSection>
					</ContentSection>
				</RegistryPage>
			)}
		</>
	);
}
