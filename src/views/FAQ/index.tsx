/** @format */

import React, { useState } from 'react';
import Accordian from '../../components/Accordian';
import { Questions } from './utils/Questions';
import UnderConstruction from '../../components/UnderConstruction';
import {
	Container,
	ScrollContainer,
	ButtonContainer,
	ScrollButton,
	Accent,
	ScrollToTopContainer,
} from './styled-components';
import Breadcrumbs from '../../components/Breadcrumbs';

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
			const yOffset = -200;
			const element = document.getElementById(key) as HTMLElement;
			const y =
				element.getBoundingClientRect().top + window.pageYOffset + yOffset;

			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};

	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<Container>
					<Breadcrumbs location={'faq'} />
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
					<h3 id='general'>General</h3>
					<Accordian
						FAQ={Questions['general']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='weekend'>Weekend</h3>
					<Accordian
						FAQ={Questions['weekend']}
						clickEvent={displayAnswer}
						clicked={detailsFAQClicked}
					/>
					<h3 id='wedding'>Wedding</h3>
					<Accordian
						FAQ={Questions['wedding']}
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
