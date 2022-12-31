/** @format */
import { useEffect, useState } from 'react';
import Toggle from '../../../../components/Toggle';
import Stepper from '../../../../components/Stepper';
import { FaArrowRight } from 'react-icons/fa';
import {
	CabinInfoSection,
	CabinCardsContainer,
	ButtonContainer,
	ToggleContainer,
	CabinListContainer,
	SelectedCabinContainer,
	SelectedCabinSection,
	Image,
	LinkContainer,
	ViewMoreLink,
	SelectedContent,
	DeselectButton,
} from './styled-components';

import Card from '../../../../components/Card';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import Popup from '../../../../components/Popup';
import ButtonError from '../../../../components/ButtonError';
import { updateGuest } from '../../Model';

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
	const [internalSelectedCabin, setInternalSelectedCabin] = useState(noCabin);
	const [selectedCabin, setSelectedCabin] = useState(noCabin);
	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		findSelectedCabinDetails(selectedGuest.lodging_id);
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
		setOpen(true);
	};

	const handleContinue = () => {
		updateGuest(selectedGuest.id, { lodging_id: internalSelectedCabin.id });
		progressFlow();
	};

	const findSelectedCabinDetails = (id) => {
		let assignedCabin = cabinList.find((cabin) => cabin.id === id);
		setSelectedCabin(assignedCabin);
	};

	return (
		<>
			<CabinInfoSection>
				{/* <div className='stepper-container'>
					<Stepper step={2} />
				</div> */}
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

				{acceptLodging ? (
					<div>
						{internalSelectedCabin.id !== 0 ||
							(selectedCabin.id !== 0 && (
								<SelectedCabinSection>
									<h2>You and your party are assigned to: </h2>
									<SelectedCabinContainer>
										<Image
											image={
												internalSelectedCabin.image_url ||
												selectedCabin.image_url
											}
										/>
										<SelectedContent>
											<h1>
												{internalSelectedCabin.name || selectedCabin.name}
											</h1>
											<p className='selected-p'>
												{internalSelectedCabin.description ||
													selectedCabin.description}
											</p>
											<LinkContainer>
												<ViewMoreLink onClick={() => setActiveModal(true)}>
													View Details <FaArrowRight />
												</ViewMoreLink>
												<DeselectButton
													onClick={() => {
														setInternalSelectedCabin(noCabin);
														setSelectedCabin(noCabin);
													}}
												>
													Deselect Button
												</DeselectButton>
											</LinkContainer>
										</SelectedContent>
									</SelectedCabinContainer>
								</SelectedCabinSection>
							))}

						<CabinListContainer>
							<h2>Available Cabins</h2>
							{cabinList && (
								<CabinCardsContainer>
									{cabinList.map((cabin, index) => {
										if (cabin.lodging_type !== 'appartment') {
											return (
												<Card
													image={cabin.image_url}
													name={cabin.name}
													type={cabin.lodging_type}
													remaining={cabin.spots_remaining}
													onClick={() => handleCardClick(cabin)}
													key={`cabin-card-${index}`}
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
								setSelectedCabin={setInternalSelectedCabin}
								setActiveModal={setActiveModal}
								noCabinSelected={
									internalSelectedCabin.id !== 0 || selectedCabin.id !== 0
								}
								selectedCabin={internalSelectedCabin || selectedCabin}
								key={`${internalSelectedCabin.id}-popup`}
								open={open}
								setOpen={setOpen}
							/>
						)}
					</div>
				) : (
					<>
						<h3>By selecting "No"</h3>

						<p className='description'>
							By selecting no, you have opted out of lodging onsite and will
							need to find another option. The lodging page on this site offers
							some suggestions.
						</p>
					</>
				)}
				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => handleContinue()} text='Continue' />
				</ButtonContainer>
			</CabinInfoSection>
		</>
	);
}
