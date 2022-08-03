/** @format */

import React from 'react';
import styled from 'styled-components';

const FAQSection = styled.div`
	width: 100%;
	max-width: 1000px;
`;
const AccordianContainer = styled.div`
	box-shadow: 0px 2px 4px lightgray;
	margin-bottom: 15px;
	margin: 1rem;

	&:nth-child(1n) {
		border-left: 5px solid rgba(78, 154, 152, 1);
	}
	&:nth-child(2n) {
		border-left: 5px solid #cae36f;
	}
	&:nth-child(3n) {
		border-left: 5px solid #f7669b;
	}
	&:nth-child(4n) {
		border-left: 5px solid #ffd32d;
	}
`;
const Question = styled.div<{ active: boolean }>`
	font-weight: ${(p) => (p.active ? '900' : '300')};
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	div.view-answer {
		font-size: 20px;
		font-weight: 900;
		padding: 10px 30px 10px;
		&:hover {
			cursor: pointer;
		}
	}
`;

const AnswerContainer = styled.div`
	&.answer_wrapper {
		height: 0;
		overflow: hidden;
	}
	&.answer_wrapper.open {
		height: auto;
	}
`;
const Answer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10px;
	margin: 0px 0px 1rem 0px;
`;

export default function Accordian({ FAQ, clickEvent, clicked }) {
	return (
		<FAQSection>
			{FAQ.map((faq, index) => {
				const active = clicked === index;
				return (
					<AccordianContainer key={index}>
						<Question active={active} onClick={() => clickEvent(index)}>
							<div>{faq.question}</div>
							<div className='view-answer'>{active ? '-' : '+'}</div>
						</Question>
						{active && (
							<AnswerContainer
								className={`answer_wrapper ${active ? 'open' : ''}`}
							>
								<Answer>{faq.answer}</Answer>
							</AnswerContainer>
						)}
					</AccordianContainer>
				);
			})}
		</FAQSection>
	);
}
