/** @format */

import * as React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const CardStyles = styled.div`
	max-width: 320px;
	padding: 1rem;
	margin: 1rem 0rem;
	width: 100%;
	border-radius: 4px;
	border-bottom: 1px solid whitesmoke;

	img {
		width: 100%;
	}
	:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
	@media only screen and (min-width: 900px) {
		max-width: 250px;
	}
`;
const ImageContainer = styled.div`
	position: relative;
`;
const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 230px;
	width: 230px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
	padding: 1rem;
`;

const Title = styled.div`
	padding: 1rem 1rem 0rem 1rem;
	h1 {
		font-size: 17px;
	}
	p.spots-remaining {
		font-size: 14px;
	}
	span.number {
		font-family: 'Circular-Medium';
	}
`;

const TypeLabel = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #000;
	color: white;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 10px;
	left: 10px;
`;

const ViewMoreLink = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1rem 2rem 1rem 1rem;
	align-items: center;
	gap: 10px;
	font-size: 14px;

	:hover {
		cursor: pointer;
		color: #3378cf;
	}
`;

export default function Card({ image, name, type, remaining, onClick }) {
	const dummyImage =
		'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
	return (
		<CardStyles onClick={() => onClick()}>
			<div>
				<ImageContainer>
					<TypeLabel>{type}</TypeLabel>
					<Image image={image ? image : dummyImage} />
				</ImageContainer>
				<Title>
					<h1>{name}</h1>
					<p className='spots-remaining'>
						There are{' '}
						<span>
							<span className='number'>{remaining}</span>
						</span>{' '}
						spots remaining in this cabin
					</p>
				</Title>
			</div>
			<div>
				<ViewMoreLink>
					View More <FaArrowRight />
				</ViewMoreLink>
			</div>
		</CardStyles>
	);
}
