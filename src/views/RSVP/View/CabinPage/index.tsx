/** @format */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../../../components/Toggle';
import Stepper from '../../../../components/Stepper';
import { FaArrowRight } from 'react-icons/fa';
import {
	CabinInfoSection,
	CabinCardsContainer,
	// FadeRight,
	// ContentContainer,
	// Title,
	// CabinCard,
	// SelectCabinButton,
	ButtonContainer,
	ToggleContainer,
	CabinListContainer,
} from './styled-components';

import Card from '../../../../components/Card';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import Popup from '../../../../components/Popup';
import ButtonError from '../../../../components/ButtonError';

interface Cabin {
	id: number;
	name: string;
	lodging_type: string;
	capacity: number;
	url: string;
	description: string;
	created_at: string;
	updated_at: string;
	title: string;
	image_url: string;
	color: string;
	occupants: [];
	spots_remaining: number;
}

export default function CabinPage({
	regressFlow,
	selectedGuest,
	progressFlow,
	cabinList,
	setCabinList,
}) {
	const noCabin = {
		id: 0,
		name: '',
		lodging_type: '',
		capacity: 0,
		url: '',
		description: '',
		created_at: '',
		updated_at: '',
		title: '',
		image_url: '',
		color: '',
		occupants: [],
		spots_remaining: '',
	};
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState(null);
	const [selectedCabin, setSelectedCabin] = useState(noCabin);
	const [acceptLodging, setAcceptLodging] = useState(false);

	useEffect(() => {
		console.log(selectedCabin, 'selected cabin in use effect');
		var body = document.body;
		if (activeModal) {
			body.classList.add('modal-open');
		} else {
			body.classList.remove('modal-open');
		}
	});

	const handleCardClick = (cabin) => {
		setActiveModal(true);
		setActiveCard(cabin);
	};

	const SelectedCabinContainer = styled.div`
		display: flex;
		flex-direction: row;
		border-radius: 4px;
		box-shadow: 2px 2px 10px 3px rgba(0, 0, 1, 0.07);
	`;

	const Image = styled.div<{ image: string }>`
		background-image: url(${(p) => p.image && p.image});
		height: 200px;
		max-width: 300px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin: 20px;
		border-radius: 5px;
		width: 100%;
	`;

	const ViewMoreLink = styled.div`
		display: flex;
		justify-content: flex-end;
		padding: 1rem 2rem 1rem 0rem;
		align-items: center;
		gap: 10px;
		font-size: 14px;

		:hover {
			cursor: pointer;
			color: #3378cf;
		}
	`;

	const SelectedContent = styled.div`
		p {
			margin: 0;
			padding-right: 4rem;
			font-size: 15px;
			padding-right: 6rem;
		}
	`;

	const LinkContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-right: 3rem;
	`;

	const SelectedCabinSection = styled.div`
		margin: 1rem 0rem 3rem 0rem;
	`;

	return (
		<>
			<Stepper step={2} />
			<CabinInfoSection>
				<ToggleContainer>
					<h2>Will you be staying onsite in a cabin?</h2>

					<div>
						<Toggle
							toggleActive={acceptLodging}
							onChange={() => setAcceptLodging(!acceptLodging)}
						/>
					</div>
				</ToggleContainer>
				<p className='description'>
					Staying in a cabin requires bringing your own bedding. While there are
					enough beds for everyone to stay in at the property, sleeping
					bags/pillows will need to be brought with you. In addition to the
					bedding, the cost of staying at a cabin onsite is $30 per person for
					the entire weekend.
				</p>
				{acceptLodging && (
					<div>
						{selectedCabin.id !== 0 && (
							<SelectedCabinSection>
								<h2>You and your party are assigned to: </h2>
								<SelectedCabinContainer>
									<Image image={selectedCabin.image_url} />
									<SelectedContent>
										<h1>{selectedCabin.name}</h1>
										<p>{selectedCabin.description}</p>
										<LinkContainer>
											<ViewMoreLink onClick={() => setActiveModal(true)}>
												View Details <FaArrowRight />
											</ViewMoreLink>
											<ButtonError
												text='Deselect This Cabin'
												onClick={() => setSelectedCabin(noCabin)}
											/>
										</LinkContainer>
									</SelectedContent>
								</SelectedCabinContainer>
							</SelectedCabinSection>
						)}

						<CabinListContainer>
							<h2>Available Cabins</h2>
							{cabinList && (
								<CabinCardsContainer>
									{cabinList.map((cabin) => {
										if (cabin.lodging_type !== 'appartment') {
											return (
												<Card
													image={cabin.image_url}
													name={cabin.name}
													type={cabin.lodging_type}
													remaining={cabin.spots_remaining}
													onClick={() => handleCardClick(cabin)}
												/>
											);
										}
									})}
								</CabinCardsContainer>
							)}
						</CabinListContainer>

						{activeModal && (
							<Popup
								activeCard={activeCard}
								setSelectedCabin={setSelectedCabin}
								setActiveModal={setActiveModal}
								noCabinSelected={selectedCabin.id !== 0}
								selectedCabin={selectedCabin}
							/>
						)}
					</div>
				)}
				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => progressFlow()} text='Continue' />
				</ButtonContainer>
			</CabinInfoSection>
		</>
	);
}
