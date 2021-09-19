/** @format */

import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	h1 {
		font-size: 45px;
		color: black;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
`;
export default function RSVP() {
	return (
		<Title>
			<h1>RSVP</h1>
		</Title>
	);
}
