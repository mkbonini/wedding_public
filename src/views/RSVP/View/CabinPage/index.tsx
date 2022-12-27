/** @format */
import { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../../../components/Toggle';
import Stepper from '../../../../components/Stepper';
import { FaAirbnb } from 'react-icons/fa';
import {
	CabinInfoSection,
	CabinCardsContainer,
	FadeRight,
	ContentContainer,
	Title,
	CabinSpotContainer,
	CabinSpot,
	CabinCard,
	SelectCabinButton,
	ButtonContainer,
	Button,
} from './styled-components';

export default function CabinPage({
	regressFlow,
	selectedGuest,
	progressFlow,
	cabinList,
	setCabinList,
}) {
	return (
		<>
			<Stepper step={2} />
			<CabinInfoSection>
				<h2>Will you be staying onsite in a cabin?</h2>
				<div>
					<Toggle toggleActive={true} onChange={() => console.log('hi')} />
				</div>
				{cabinList && (
					<CabinCardsContainer>
						{/* <FadeLeft /> */}
						<FadeRight />
						{cabinList.map((cabin) => (
							<CabinCard>
								<img src={cabin?.image} alt='cabin' />
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
