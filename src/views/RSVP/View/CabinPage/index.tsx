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
	const [open, setOpen] = useState(false);

	useEffect(() => {
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
						{selectedCabin.id !== 0 && (
							<SelectedCabinSection>
								<h2>You and your party are assigned to: </h2>
								<SelectedCabinContainer>
									<Image image={selectedCabin.image_url} />
									<SelectedContent>
										<h1>{selectedCabin.name}</h1>
										<p className='selected-p'>{selectedCabin.description}</p>
										<LinkContainer>
											<ViewMoreLink onClick={() => setActiveModal(true)}>
												View Details <FaArrowRight />
											</ViewMoreLink>
											<DeselectButton onClick={() => setSelectedCabin(noCabin)}>
												Deselect Button
											</DeselectButton>
										</LinkContainer>
									</SelectedContent>
								</SelectedCabinContainer>
							</SelectedCabinSection>
						)}

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
								setSelectedCabin={setSelectedCabin}
								setActiveModal={setActiveModal}
								noCabinSelected={selectedCabin.id !== 0}
								selectedCabin={selectedCabin}
								key={`${selectedCabin.id}-popup`}
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
							need to find another option for lodging. The lodging page on this
							site offers some suggestions.
						</p>
					</>
				)}
				<ButtonContainer>
					<ButtonSecondary onClick={() => regressFlow()} text='Back' />
					<Button onClick={() => progressFlow()} text='Continue' />
				</ButtonContainer>
			</CabinInfoSection>
		</>
	);
}
