/** @format */

import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import map from '../assets/DeerCreekMap.jpg';
import { cabinInfo } from './utils/getLodgingFAQ';
import Modal from '../components/Modal';
import arrow from '../assets/arrow.png';

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

const ImageContainer = styled.div`
	max-width: 40px;
	img {
		width: 100%;
	}
`;

const MapImageContainer = styled.div`
	max-width: 900px;
	img {
		width: 100%;
	}
`;

const bounce = keyframes`
  0%{
	transform: translateY(0);
  }
  50%{
	transform: translateY(-15px);
  }
  100% {
	transform: translateY(0px);
  }
`;

const ArrowContainer = styled.div<{
	displayArrow: boolean;
	top: number;
	left: number;
}>`
	display: ${(p) => (p.displayArrow ? 'block' : 'block')};
	max-width: 25px;
	animation: ${bounce} 1s linear infinite;
	position: absolute;
	top: ${(p) => p.top && `${p.top}%`};
	left: ${(p) => p.left && `${p.left}%`};
	img {
		width: 100%;
		position: relative;
	}
`;

const MapContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CabinCard = styled.div<{ color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	min-height: 75px;
	width: 100%;
	padding: 20px;
	margin: 10px;
	border: 1px solid gray;
	border-radius: 5px;
	&:hover {
		background-color: ${(p) => p.color && p.color};
		opacity: 0.9;
	}
	h1 {
		font-family: 'Raleway', sans-serif;
		font-size: 20px;
		padding: 0;
		margin: 0;
	}
	h3 {
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		font-size: 16px;
		padding: 0;
		margin: 0;
	}
`;

const CabinInfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	max-height: 700px;
	border: 1px solid lightgray;
	margin: 1rem;
	padding: 1rem;
	overflow-x: scroll;
	width: 80%;
	max-width: 400px;
	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 7px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(78, 154, 152, 1);
	}

	h2 {
		text-transform: uppercase;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}
	@media only screen and (max-width: 1000px) {
		max-width: unset;
		margin: 0;
	}
`;

const LodgingContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export default function Lodging() {
	const [visible, setVisible] = useState(false);
	const [cabinClicked, setCabinClicked] = useState('');
	const [displayArrow, setDisplayArrow] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const handleClick = (id: string) => {
		setVisible(true);
		setCabinClicked(id);
	};

	const handleHover = (top: number, left: number) => {
		setDisplayArrow(true);
		setTop(top);
		setLeft(left);
		console.log(top, left);
	};

	return (
		<>
			<Modal
				setVisible={setVisible}
				visible={visible}
				data={cabinInfo}
				cabinClicked={cabinClicked}
			/>
			<Title>
				<h1>{'Lodging & Food'}</h1>
			</Title>
			<LodgingContainer>
				<MapContainer>
					<ArrowContainer displayArrow={displayArrow} top={top} left={left}>
						<img src={arrow} alt='' />
					</ArrowContainer>
					<MapImageContainer>
						<img src={map} alt='' />
					</MapImageContainer>
				</MapContainer>
				<CabinInfoContainer>
					<h2>Cabin Information</h2>
					{cabinInfo.map((cabin) => {
						return (
							<CabinCard
								color={cabin.color}
								onClick={() => handleClick(cabin.id)}
								onMouseEnter={() => handleHover(cabin.top, cabin.left)}
								onMouseLeave={() => setDisplayArrow(false)}
							>
								<ImageContainer>
									<img src={cabin.image} alt='' />
								</ImageContainer>
								<h1>{cabin.name}</h1>
								<h3>
									{cabin.capacity}
									{cabin.capacity === 1
										? ' spot available'
										: ' spots available'}
								</h3>
							</CabinCard>
						);
					})}
				</CabinInfoContainer>
			</LodgingContainer>
		</>
	);
}
