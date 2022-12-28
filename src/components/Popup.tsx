/** @format */

import * as React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { TbBrandAirbnb } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import ButtonFullWidth from './ButtonFullWidth';

const PopupStyles = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 0.7rem;
	border-radius: 4px;
	min-height: 580px;
	box-shadow: 2px 2px 10px 3px rgba(0, 0, 1, 0.07);
	position: fixed;
	left: 50%;
	top: 50%;

	transform: translate(-50%, -50%);
	z-index: 10000;
	background-color: white;
	border-radius: 5px;
	img {
		width: 100%;
	}
	/* :hover {
		transform: scale(1.01);
	} */
`;

const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 500px;
	max-width: 500px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	margin: 20px;
	border-radius: 5px;
	width: 100%;
`;

const Title = styled.div`
	padding: 1rem 1rem 0rem 1rem;
	max-width: 750px;
	padding-top: 2rem;
	h1 {
		font-family: 'Gilroy-Bold';
		font-size: 40px;
		padding: 1rem 0rem 1rem 0rem;
		margin: 0;
	}
	p.spots-remaining {
		font-size: 16px;
		padding: 1rem 0rem;
	}
	p.description {
		padding-right: 3rem;
	}
	.links {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.airbnb-link {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 20px;
		gap: 5px;
		text-decoration: underline;
		:hover {
			cursor: pointer;
			color: lightgray;
		}
	}
`;

const TypeLabel = styled.div`
	width: 70px;
	border-radius: 2px;
	background-color: gray;
	color: white;
	font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	margin: 10px 0px;
`;

const PopupScreen = styled.div`
	opacity: 0.5;
	background: #000;
	width: 100%;
	height: 100%;
	z-index: 10;
	top: 0;
	left: 0;
	position: fixed;
`;

const ExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 20px 20px 0px 0px;
	font-size: 25px;
	svg {
		z-index: 10001;
		:hover {
			cursor: pointer;
		}
	}
`;

const CabinSpotContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 1rem;
`;
const CabinSpot = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	width: 170px;
	padding: 5px;
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		&.spot-number {
			font-size: 12px;
			background-color: ${(p) => p.color && p.color};
			min-width: 25px;
			height: 25px;
			color: white;
			margin-right: 10px;
			border-radius: 10px;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 3rem 0rem 4rem -2rem;
`;

const ContentGroup = styled.div`
	display: flex;
	margin-top: -30px;
`;
export default function Popup({
	activeCard,
	setSelectedCabin,
	setActiveModal,
	noCabinSelected,
	selectedCabin,
}) {
	const {
		name,
		image_url,
		lodging_type,
		spots_remaining,
		description,
		occupants,
		color,
		url,
	} = activeCard;
	const dummyImage =
		'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

	const handleSelectCabin = () => {
		setActiveModal(false);
		setSelectedCabin(activeCard);
	};

	const handleExit = () => {
		setActiveModal(false);
	};

	return (
		<>
			<PopupScreen />
			<PopupStyles>
				<ExitButton>
					<GrClose onClick={() => handleExit()} />
				</ExitButton>
				<ContentGroup>
					<Image image={image_url ? image_url : dummyImage} />
					<Title>
						<h1>{name}</h1>
						<div className='links'>
							<div className='airbnb-link'>
								<TbBrandAirbnb onClick={() => window.open(url)} /> View on
								Airbnb
							</div>
						</div>
						<p className='description'> {description}</p>

						<CabinSpotContainer>
							{occupants.map((occupant, index) => {
								return (
									<CabinSpot
										color={occupant !== 'Spot Available' ? color : '#242424'}
									>
										<div className='spot-number'>{index + 1}</div>
										<span>{occupant}</span>
									</CabinSpot>
								);
							})}
						</CabinSpotContainer>

						<ButtonContainer>
							<ButtonFullWidth
								onClick={() => handleSelectCabin()}
								text={
									activeCard === selectedCabin
										? 'You already selected this cabin'
										: 'Select This Cabin'
								}
							/>
						</ButtonContainer>
					</Title>
				</ContentGroup>
			</PopupStyles>
		</>
	);
}
