/** @format */

import React from 'react';
import styled from 'styled-components';
import ring from '../assets/rings.png';

const Line = styled.div`
	height: 1px;
	width: 100%;
	margin: 40px auto;
	background-color: black;
`;

const ImageContainer = styled.div`
	width: 100px;
	margin: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;
	img {
		width: 40px;
		height: 40px;
		padding: 0px 10px 0px 10px;
	}
`;

export default function Hr() {
	return (
		<ImageContainer>
			<Line />
			<img src={ring} alt='ring' />
			<Line />
		</ImageContainer>
	);
}
