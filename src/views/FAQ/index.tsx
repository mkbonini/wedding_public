/** @format */

import Accordian from '../../components/Accordian';
import { Questions } from './utils/Questions';
import {
	Container,
	ScrollContainer,
	ButtonContainer,
	ScrollButton,
	Accent,
	Category,
	ScrollToTopContainer,
} from './styled-components';

export default function FAQ() {
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
		<Container>
			<h1 id='title'>FAQ</h1>
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

			<Category>
				<h3 id='lodging'>Lodging</h3>
			</Category>
			<Accordian FAQ={Questions['lodging']} />

			<Category>
				<h3 id='rsvp'>RSVP</h3>
			</Category>
			<Accordian FAQ={Questions['rsvp']} />

			<Category>
				<h3 id='general'>General</h3>
			</Category>
			<Accordian FAQ={Questions['general']} />

			<Category>
				<h3 id='weekend'>Weekend</h3>
			</Category>
			<Accordian FAQ={Questions['weekend']} />

			<Category>
				<h3 id='wedding'>Wedding</h3>
			</Category>
			<Accordian FAQ={Questions['wedding']} />

			<Category>
				<h3 id='other'>Other</h3>
			</Category>
			<Accordian FAQ={Questions['other']} />

			<ScrollToTopContainer>
				<ScrollButton
					onClick={() => scrollToSection('title')}
					id='bottom-button'
				>
					scroll to top
				</ScrollButton>
			</ScrollToTopContainer>
		</Container>
	);
}
