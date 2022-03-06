/** @format */

import React from 'react';
import styled from 'styled-components';
import ConstructionOverlay from '../components/ConstructionOverlay';

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	height: 50vh;
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 45px;
		color: black;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

export default function Registry() {
	const underConstruction = false;
	return (
		<>
			{underConstruction ? (
				<ConstructionOverlay page={'registry'} />
			) : (
				<Title>
					<h1>Registry</h1>
				</Title>
			)}
		</>
	);
}
