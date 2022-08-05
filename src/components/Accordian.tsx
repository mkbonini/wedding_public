/** @format */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQSection = styled.div`
	width: 100%;
`;
const AccordianContainer = styled.div`
	border: 1px solid darkgray;
	margin-bottom: 15px;
	margin: 1rem;
	transition: ease-in-out 0.2s;

	&:hover {
		cursor: pointer;
	}
`;
const Question = styled.div<{ active: boolean }>`
	margin: -5px 5px 5px 20px;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	font-size: 17px;
	color: black;
	svg {
		color: #9bba1d;
	}

	@media only screen and (max-width: 900px) {
		font-size: 15px;
	}
`;

const ArrowContainer = styled.div`
	font-size: 20px;
	font-weight: 900;
	padding: 10px 30px 10px;
	transform: rotate(0deg);
	transition: transform 0.1s linear;
	&.arrow-up {
		transform: rotate(180deg);
		transition: transform 0.1s linear;
	}
`;

const AnswerContainer = styled.div`
	margin: -10px 0px 0px 30px;
	height: 0px;
	overflow: hidden;
	max-width: 850px;
	transition: height 0.5s ease;
	&.open {
		height: 100px;
	}
	@media only screen and (max-width: 900px) {
		max-width: 290px;
		&.open {
			height: 200px;
		}
	}
`;
const Answer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 20px;
	font-size: 15px;
	font-family: 'Nunito';
`;

export default function Accordian({ FAQ, clickEvent, clicked }) {
	const [openedPanel, setOpenPanel] = React.useState<any[]>([]);

	const setClickedElement = (id) => {
		if (openedPanel.includes(id)) {
			setOpenPanel(openedPanel.filter((item) => item !== id));
		} else {
			setOpenPanel([...openedPanel, id]);
		}
	};

	return (
		<FAQSection>
			{FAQ.map((faq, index) => {
				let active = openedPanel.includes(index);
				return (
					<AccordianContainer
						key={index}
						onClick={() => setClickedElement(index)}
					>
						<Question active={active}>
							<div>{faq.question}</div>
							<ArrowContainer className={`${active && 'arrow-up'}`}>
								<IoIosArrowDown />
							</ArrowContainer>
						</Question>
						<AnswerContainer className={` ${active && 'open'}`}>
							<Answer>{faq.answer}</Answer>
						</AnswerContainer>
					</AccordianContainer>
				);
			})}
		</FAQSection>
	);
}
