/** @format */

import React from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';

const ContentBlockContainer = styled.div<{
	position: string;
	backgroundColor: string;
	copyColor: string;
}>`
	display: flex;
	flex-direction: ${(p) => (p.position === 'right' ? 'row-reverse' : 'row')};
	justify-content: center;
	align-items: center;
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'white')};
	p {
		color: ${(p) => (p.copyColor ? p.copyColor : 'black')};
		font-size: 30px;
		padding: 20px;
		text-align: center;
		max-width: 270px;
		font-family: 'Questrial', sans-serif;
	}
	img {
		width: 50%;
	}
	div {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	div#copy-div {
		min-height: 350px;
	}
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		img {
			width: 100%;
		}
		div {
			width: 100%;
		}
	}
`;

export default function ContentBlock({
	image,
	copy = '',
	imagePosition,
	backgroundColor,
	copyColor,
	alt,
	countdown,
	id,
}) {
	return !countdown ? (
		<ContentBlockContainer
			position={imagePosition}
			backgroundColor={backgroundColor}
			copyColor={copyColor}
			id={id}
		>
			<img src={image} alt={alt} />
			<div id='copy-div'>
				<p>{copy} </p>
			</div>
		</ContentBlockContainer>
	) : (
		<ContentBlockContainer
			position={imagePosition}
			backgroundColor={backgroundColor}
			copyColor={copyColor}
			id={id}
		>
			<img src={image} alt={alt} />
			<Countdown />
		</ContentBlockContainer>
	);
}
