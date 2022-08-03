/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import Accordian from '../../components/Accordian';
import { Questions } from './utils/Questions';

export default function FAQ() {
	const displayAnswer = (index) => {
		if (setDetailsFAQClick === index) {
			return setDetailsFAQClick(0);
		}
		setDetailsFAQClick(index);
	};
	const [detailsFAQClicked, setDetailsFAQClick] = useState(0);

	const Container = styled.div`
		margin-top: 8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h2 {
			font-size: 30px;
			font-family: 'Lexend', sans-serif;
		}
	`;
	return (
		<Container>
			<h2>FAQ</h2>
			<Accordian
				FAQ={Questions}
				clickEvent={displayAnswer}
				clicked={detailsFAQClicked}
			/>
		</Container>
	);
}
