/** @format */

import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 800px;
	h3 {
		font-size: 30px;
		font-family: 'Gilroy-Bold';
		text-align: center;
		margin: 0;
	}
	p {
		margin: 0;
	}
`;

export default function UnderConstruction() {
	return (
		<Message>
			<h3>Page Under Construction</h3>
			<p>come back later for more info.</p>
		</Message>
	);
}
