/** @format */

import * as React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const CardStyles = styled.div`
	max-width: 270px;
	width: 100%;
	margin: 0.7rem;
	border-radius: 4px;
	height: 420px;
	box-shadow: 2px 2px 10px 3px rgba(0, 0, 1, 0.07);

	img {
		width: 100%;
	}
	:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
`;

const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 220px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 4px 4px 0px 0px;
`;

const Title = styled.div`
	padding: 1rem 1rem 0rem 1rem;
	h1 {
		font-family: 'Gilroy-Bold';
		font-size: 17px;
	}
	p.spots-remaining {
		font-size: 14px;
	}
`;

const TypeLabel = styled.div`
	width: 80px;
	border-radius: 2px;
	background-color: gray;
	color: white;
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	margin-top: 20px;
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
				<Image image={image ? image : dummyImage} />
				<Title>
					<h1>{name}</h1>
					<p className='spots-remaining'>
						There are{' '}
						<span>
							<strong>{remaining}</strong>
						</span>{' '}
						spots remaining in this cabin
					</p>
					<TypeLabel>{type}</TypeLabel>
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
