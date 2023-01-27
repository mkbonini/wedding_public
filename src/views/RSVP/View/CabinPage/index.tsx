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
import { updateGuest } from '../../Model';
import ConfirmationCabin from '../../../../components/ConfirmationCabin';

export default function CabinPage({
	regressFlow,
	progressFlow,
	cabinList,
	selectedGuest,
	setSelectedGuest,
}) {
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState();
	const [internalCabin, setInternalCabin] = useState<any>(undefined);
	const [acceptLodging, setAcceptLodging] = useState(
		selectedGuest.lodging_id > 0 ? true : false
	);
	const [open, setOpen] = useState(false);
	const [selectCabinNotice, setSelectCabinNotice] = useState(false);

	const selectedCabin = () => {
		if (cabinList) {
			return cabinList.find((cabin) => cabin?.id === selectedGuest?.lodging_id);
		} else {
			return null;
		}
	};

	useEffect(() => {
		let cabin = selectedCabin();
		setInternalCabin(cabin);
	}, [selectedCabin]);

	useEffect(() => {
		var body = document.body;
		if (activeModal) {
			setOpen(true);
			body.classList.add('modal-open');
		} else {
			setOpen(false);
			body.classList.remove('modal-open');
		}
	}, [activeModal]);

	const handleCardClick = (cabin) => {
		setActiveModal(true);
		setActiveCard(cabin);
		setOpen(true);
	};

	const handleContinue = () => {
		// if (internalCabin === undefined && !acceptLodging) {
		// 	progressFlow();
		// } else if (internalCabin === undefined && acceptLodging) {
		// 	setSelectCabinNotice(true);
		// } else if (internalCabin.id && !acceptLodging) {
		// 	setInternalCabin(undefined);
		// 	progressFlow();
		// } else if (acceptLodging && internalCabin.id) {
		// 	// updateGuest(selectedGuest?.id, { lodging_id: internalCabin?.id });

		// 	setSelectCabinNotice(false);
		// 	window.scrollTo(0, 0);
		// }

		setSelectedGuest({ ...selectedGuest, lodging_id: internalCabin?.id });

		progressFlow();
	};

	return (
		<>
			<CabinInfoSection>
				<div className='stepper-container'>
					<Stepper step={2} />
				</div>
				<ToggleContainer>
					<div className='sub-heading'>
						Will you be staying onsite in a cabin?
					</div>
					<div>
						<Toggle
							toggleActive={acceptLodging}
							onChange={() => setAcceptLodging(!acceptLodging)}
						/>
					</div>
				</ToggleContainer>

				<ConfirmationCabin
					setState={setSelectCabinNotice}
					state={selectCabinNotice}
					text='You have not selected a cabin. Please choose one before
					continuing.'
				/>
				<p className='description'>
					Staying in a cabin requires bringing your own bedding. While there are
					enough beds for everyone to stay in at the property, sleeping
					bags/pillows will need to be brought with you. In addition to the
					bedding, the cost of staying at a cabin onsite is $30 per person for
					the entire weekend.
				</p>

				{acceptLodging ? (
					<div>
						{internalCabin && (
							<SelectedCabinSection>
								<div className='sub-heading'>
									You and your party are assigned to:
								</div>
								<SelectedCabinContainer>
									<Image image={internalCabin?.image_url ?? ''} />
									<SelectedContent>
										<h1>{internalCabin?.name}</h1>
										<p className='selected-p'>{internalCabin?.description}</p>
										<LinkContainer>
											<ViewMoreLink onClick={() => setActiveModal(true)}>
												View Details <FaArrowRight />
											</ViewMoreLink>
											<DeselectButton
												onClick={() => setInternalCabin(undefined)}
											>
												Deselect Button
											</DeselectButton>
										</LinkContainer>
									</SelectedContent>
								</SelectedCabinContainer>
							</SelectedCabinSection>
						)}

						<div>Available Cabins</div>
						<CabinListContainer>
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
								setSelectedCabin={setInternalCabin}
								setActiveModal={setActiveModal}
								noCabinSelected={internalCabin?.id !== 0}
								selectedCabin={internalCabin}
								id={`${internalCabin?.id}-popup`}
								open={open}
								setOpen={setOpen}
							/>
						)}
					</div>
				) : (
					<>
						<div className='sub-heading'>By selecting "No"</div>

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
