/** @format */
import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../../components/Toggle';
import Stepper from '../../../components/Stepper';
import cabinImage from '../../../assets/cabins/lark.jpg';
import cabinImage2 from '../../../assets/cabins/aspen.jpg';
import { FaAirbnb } from 'react-icons/fa';

export default function CabinPage({
	regressFlow,
	selectedGuest,
	progressFlow,
	cabin,
	setCabin,
}) {
	const ButtonContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	`;

	const Button = styled.button`
		height: 50px;
		width: 200px;

		&.main {
			background-color: #000000;
			color: #ffffff;
		}
		&.secondary {
			color: #000000;
			background-color: #ffffff;
			border: 1px solid #000000;
		}
	`;

	const CabinInfoSection = styled.div`
		width: 100%;
		max-width: 1200px;
		min-height: 600px;
		display: flex;
		flex-direction: column;
		align-items: start;
		padding-bottom: 8rem;
		h2 {
			font-size: 20px;
		}
		p {
			padding: 20px 0px;
			margin: 0px 0px 10px 0px;
			&.plus-one {
				margin: 0px 0px 10px 15px;
			}
		}
	`;

	const CabinCardsContainer = styled.div`
		max-width: 1200px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		margin: 2rem 0rem;
		overflow: hidden;
		position: relative;
	`;

	const FadeLeft = styled.div`
		position: absolute;
		z-index: 1000;
		height: 100%;
		width: 150px;
		left: 0;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(240, 240, 240, 0.6) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	`;

	const FadeRight = styled.div`
		position: absolute;
		z-index: 1000;
		height: 100%;
		width: 150px;
		right: 0;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(240, 240, 240, 0.6) 100%
		);
	`;
	const CabinCard = styled.div`
		margin: 1rem;
		height: 950px;
		min-width: 450px;
		outline: 1px solid lightgray;
		position: relative;

		img {
			width: 100%;
		}
	`;

	const Title = styled.div`
		display: flex;
		flex-direction: column;
		h1 {
			font-size: 40px;
			margin: 0;
			font-family: 'Gilroy-Bold';
		}
		h2 {
			font-size: 17px;
			font-family: 'Gilroy';
			margin: 5px 5px 5px 0px;
		}
	`;

	const ContentContainer = styled.div`
		padding: 2rem 2rem 0rem 2rem;
	`;

	const SelectCabinButton = styled.div`
		width: 100%;
		height: 60px;
		background-color: black;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0;
		cursor: pointer;
	`;

	const CabinSpotContainer = styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0rem 2rem;
	`;
	const CabinSpot = styled.div<{ color: string }>`
		display: flex;
		flex-direction: row;
		min-width: 170px;
		padding: 10px;
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			&.spot-number-unavailable {
				font-size: 12px;
				background-color: ${(p) => p.color && p.color};
				width: 25px;
				height: 25px;
				color: white;
				margin-right: 10px;
			}
			&.spot-number-available {
				font-size: 12px;
				background-color: black;
				width: 25px;
				height: 25px;
				color: white;
				margin-right: 10px;
			}
		}
	`;
	const IconContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: center;
	`;

	const Icon = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		top: 37%;
		padding-right: 40px;
		cursor: pointer;
		&:hover {
			color: #ff5a5f;
		}
		#airbnb-icon {
			font-size: 30px;
			padding: 5px;
			margin: 0;
		}
		p {
			font-size: 14px;
			margin: 0;
			padding: 0;
			text-align: center;
			max-width: 50px;
			line-height: 14px;
		}
	`;

	const cabinInfo = [
		{
			name: 'Aspen',
			totalSpots: 10,
			spotsRemaining: 8,
			type: 'women',
			color: '#FF99FF',
			link: '',
			description:
				'The cabin sleeps 10 in bunk beds as shown in the pictures. Guests will provide their own bedding and toiletries for anearby shower house. Cabin includes a gas grill, fridge, and microwave',

			image: cabinImage2,
			guests: [
				{
					spot: 1,
					name: 'Sally Weatherman',
				},
				{
					spot: 2,
					name: 'Harry Styles',
				},
				{ spot: 3, name: null },
				{ spot: 4, name: null },
				{ spot: 5, name: null },
				{ spot: 6, name: null },
				{ spot: 7, name: null },
				{ spot: 8, name: null },
				{ spot: 9, name: null },
				{ spot: 10, name: null },
			],
		},
		{
			name: 'Humming Bird',
			totalSpots: 10,
			spotsRemaining: 2,
			color: '#3366FF',
			type: 'coed',
			description:
				'The cabin sleeps 10 in bunk beds as shown in the pictures. Guests will provide their own bedding and toiletries for anearby shower house. Cabin includes a gas grill, fridge, and microwave',
			image: cabinImage,
			link: '',
			guests: [
				{
					spot: 1,
					name: 'Sally',
				},
				{
					spot: 2,
					name: 'Harry',
				},
				{
					spot: 3,
					name: 'Jim',
				},
				{
					spot: 4,
					name: 'Kim',
				},
				{
					spot: 5,
					name: 'Pete',
				},
				{
					spot: 6,
					name: 'Pam',
				},
				{
					spot: 7,
					name: 'Kevin',
				},
				{
					spot: 8,
					name: 'Steve',
				},
				{ spot: 9, name: null },
				{ spot: 10, name: null },
			],
		},
		{
			name: 'Lark',
			totalSpots: 10,
			spotsRemaining: 5,
			color: '#3366FF',
			description:
				'The cabin sleeps 10 in bunk beds as shown in the pictures. Guests will provide their own bedding and toiletries for anearby shower house. Cabin includes a gas grill, fridge, and microwave',
			image: cabinImage,
			type: 'coed',
			link: '',
			guests: [
				{ spot: 1, name: 'Sally Weatherman' },
				{
					spot: 2,
					name: 'Harry Styles',
				},
				{
					spot: 3,
					name: 'Jim Halpert',
				},
				{
					spot: 4,
					name: 'Kim West',
				},
				{ spot: 5, name: 'Pete David' },
				{ spot: 6, name: null },
				{ spot: 7, name: null },
				{ spot: 8, name: null },
				{ spot: 9, name: null },
				{ spot: 10, name: null },
			],
		},
	];
	return (
		<>
			<Stepper step={2} />
			<CabinInfoSection>
				<h2>Will you be staying onsite in a cabin?</h2>
				<div>
					<Toggle toggleActive={!cabin} onClick={() => setCabin(!cabin)} />
				</div>
				{cabin && (
					<CabinCardsContainer>
						{/* <FadeLeft /> */}
						<FadeRight />
						{cabinInfo.map((cabin) => (
							<CabinCard>
								<img src={cabin.image} alt='cabin' />
								<ContentContainer>
									{/* <IconContainer>
										<Icon>
											<FaAirbnb id='airbnb-icon' />
											<p>view more</p>
										</Icon>
									</IconContainer> */}
									<Title>
										<h1>{cabin.name}</h1>
										<h2>{cabin.spotsRemaining} spots remaining</h2>
									</Title>
									<p>{cabin.description}</p>
								</ContentContainer>

								<CabinSpotContainer>
									{cabin.guests.map((guest) => {
										if (guest.name !== null) {
											return (
												<CabinSpot color={cabin.color}>
													<div className='spot-number-unavailable'>
														{guest.spot}
													</div>
													<span>{guest.name}</span>
												</CabinSpot>
											);
										} else {
											return (
												<CabinSpot color={cabin.color}>
													<div className='spot-number-available'>
														{guest.spot}
													</div>
													<span>Spot Available</span>
												</CabinSpot>
											);
										}
									})}
								</CabinSpotContainer>

								<SelectCabinButton>Select this Cabin</SelectCabinButton>
							</CabinCard>
						))}
					</CabinCardsContainer>
				)}

				<ButtonContainer>
					<Button onClick={() => regressFlow()}>back</Button>
				</ButtonContainer>
			</CabinInfoSection>
		</>
	);
}
