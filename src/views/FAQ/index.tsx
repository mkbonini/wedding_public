/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Accordian from '../../components/Accordian';
import { Questions } from './utils/Questions';
import UnderConstruction from '../../components/UnderConstruction';

export default function FAQ() {
	const displayAnswer = (index) => {
		if (setDetailsFAQClick === index) {
			return setDetailsFAQClick(0);
		}
		setDetailsFAQClick(index);
	};
	const [detailsFAQClicked, setDetailsFAQClick] = useState(0);
	const [underConstruction, setUnderConstruction] = useState(false);

	const scrollToSection = (key) => {
		if (document !== null) {
			// const section = document.getElementById(key) as HTMLElement;
			// section.scrollIntoView();

			const yOffset = -200;
			const element = document.getElementById(key) as HTMLElement;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	const Container = styled.div`
		width: 100%;
		max-width: 1000px;
		padding: 8rem 0rem;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h2 {
			font-size: 30px;
			font-family: 'Lexend', sans-serif;
		}
		h3 {
			align-self: flex-start;
			margin-left: 20px;
		}
	`;

	const ScrollContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		max-width: 850px;
		padding-bottom: 1rem;

		@media only screen and (max-width: 900px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	`;

	const ScrollButton = styled.div`
		height: 150px;
		width: 100%;
		background-color: #000000;
		color: #ffffff;
		border-radius: 3px;
		margin: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		&:hover {
			cursor: pointer;
		}
		&#bottom-button {
			width: 150px;
			height: 40px;
			&:hover {
				cursor: pointer;
			}
		}
		&:hover + #accent {
			opacity: 1;
			width: 100%;
		}

		@media only screen and (max-width: 900px) {
			height: 70px;
			width: 90%;
			border-radius: 2px;
			margin: 2px;
		}
	`;

	const Accent = styled.div`
		height: 5px;
		width: 100px;
		opacity: 0;
		&.lodging {
			background-color: #3366ff;
		}
		&.rsvp {
			background-color: #c9e265;
		}
		&.general {
			background-color: #ff99ff;
		}
		&.weekend {
			background-color: #3366ff;
		}
		&.wedding {
			background-color: #c9e265;
		}

		@media only screen and (max-width: 900px) {
			display: none;
		}
	`;

	const ScrollToTopContainer = styled.div`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	`;

	const ButtonContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 10px;
	`;
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<Container>
					<h2 id='title'>FAQ</h2>
					<ScrollContainer>
						{Object.keys(Questions).map((key) => (
							<ButtonContainer key={key}>
								<ScrollButton onClick={() => scrollToSection(key)}>
									{key}
								</ScrollButton>
								<Accent id='accent' className={key} />
							</ButtonContainer>
						))}
					</ScrollContainer>
					<h3 id='general'>General</h3>
					<Accordian
						FAQ={Questions['general']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='lodging'>Lodging</h3>
					<Accordian
						FAQ={Questions['lodging']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='rsvp'>RSVP</h3>
					<Accordian
						FAQ={Questions['rsvp']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='wedding'>Wedding</h3>
					<Accordian
						FAQ={Questions['wedding']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='weekend'>Weekend</h3>
					<Accordian
						FAQ={Questions['weekend']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>

					<ScrollToTopContainer>
						<ScrollButton
							onClick={() => scrollToSection('title')}
							id='bottom-button'
						>
							scroll to top
						</ScrollButton>
					</ScrollToTopContainer>
				</Container>
			)}
		</>
	);
}
