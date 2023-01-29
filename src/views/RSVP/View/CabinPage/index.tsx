/** @format */
import { useEffect, useState, useContext } from 'react';
import { GuestContext } from '../../../../context/GuestContext';
import Toggle from '../../../../components/Toggle';
import Stepper from '../../../../components/Stepper';
import { FaArrowRight } from 'react-icons/fa';
import Confirmation from '../../../../components/Confirmation';
import { IoIosArrowDown } from 'react-icons/io';

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
	AvailableCabinMessage,
	ArrowContainer,
} from './styled-components';

import Card from '../../../../components/Card';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import Popup from '../../../../components/Popup';
import { updateGuest, getSelectedGuest } from '../../Model';

export default function CabinPage({ regressFlow, progressFlow, cabinList }) {
	const { guest } = useContext<any>(GuestContext);
	const [loaded, setLoaded] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState();
	const [selectedCabin, setSelectedCabin] = useState<any>(null);
	const [noLodgingNotice, setNoLodgingNotice] = useState(false);
	const [hideCabins, setHideCabins] = useState(false);

	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let current = await getSelectedGuest(guest.id);
			setCurrentState(current);
			setLoaded(true);
		})();
		return () => controller?.abort();
	}, []);

	function setCurrentState(current) {
		let cabin = cabinList.find((cabin) => cabin?.id === current?.lodging_id);
		if (cabin) {
			setAcceptLodging(true);
			setSelectedCabin(cabin);
		}
	}

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
		if (selectedCabin === null) setNoLodgingNotice(true);
		// if (selectedCabin === undefined && !acceptLodging) {
		// 	progressFlow();
		// } else if (selectedCabin === undefined && acceptLodging) {
		// 	setSelectCabinNotice(true);
		// } else if (selectedCabin.id && !acceptLodging) {
		// 	setInternalCabin(undefined);
		// 	progressFlow();
		// } else if (acceptLodging && selectedCabin.id) {
		// 	// updateGuest(guest?.id, { lodging_id: selectedCabin?.id });

		// 	setSelectCabinNotice(false);
		// 	window.scrollTo(0, 0);
		// }

		// setInternalGuest({ ...guest, lodging_id: selectedCabin?.id });
		console.log(selectedCabin);
		// progressFlow();
	};

	const content = (
		<span>
			You have not selected a cabin. <br />
			Please select a cabin or select "No" for lodging
		</span>
	);

	return (
		<>
			<CabinInfoSection>
				{noLodgingNotice && (
					<Confirmation
						handleExit={() => setNoLodgingNotice(false)}
						content={content}
						confirm={true}
					/>
				)}

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
				<p className='description'>
					Staying in a cabin requires bringing your own bedding. While there are
					enough beds for everyone to stay in at the property, sleeping
					bags/pillows will need to be brought with you. In addition to the
					bedding, the cost of staying at a cabin onsite is $30 per person for
					the entire weekend.
				</p>
				{acceptLodging ? (
					<div>
						{selectedCabin && (
							<SelectedCabinSection>
								<div className='sub-heading'>
									You and your party are assigned to:
								</div>
								<SelectedCabinContainer>
									<Image image={selectedCabin?.image_url ?? ''} />
									<SelectedContent>
										<h1>{selectedCabin?.name}</h1>
										<p className='selected-p'>{selectedCabin?.description}</p>
										<LinkContainer>
											<ViewMoreLink onClick={() => setActiveModal(true)}>
												View Details <FaArrowRight />
											</ViewMoreLink>
											<DeselectButton
												onClick={() => {
													setSelectedCabin(null);
													setHideCabins(false);
												}}
											>
												Deselect Button
											</DeselectButton>
										</LinkContainer>
									</SelectedContent>
								</SelectedCabinContainer>
							</SelectedCabinSection>
						)}
						<AvailableCabinMessage onClick={() => setHideCabins(!hideCabins)}>
							<>
								{hideCabins ? 'View Available Cabins' : 'Available Cabins'}
								<ArrowContainer className={`${!hideCabins && 'arrow-up'}`}>
									<IoIosArrowDown />
								</ArrowContainer>
							</>
						</AvailableCabinMessage>
						<CabinListContainer className={`${!hideCabins && 'open'}`}>
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
								setHideCabins={setHideCabins}
								setSelectedCabin={setSelectedCabin}
								setActiveModal={setActiveModal}
								noCabinSelected={selectedCabin?.id !== 0}
								selectedCabin={selectedCabin}
								id={`${selectedCabin?.id}-popup`}
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
