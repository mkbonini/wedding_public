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
	ArrowContainer,
	ViewMoreButton,
} from './styled-components';

import Card from '../../../../components/Card';
import ButtonSecondary from '../../../../components/ButtonSecondary';
import Button from '../../../../components/Button';
import Popup from '../../../../components/Popup';
import { updateGuest, getSelectedGuest, getLodgings } from '../../Model';
import { off } from 'process';
import Loading from '../../../../components/Loading';

export default function CabinPage({ regressFlow, progressFlow }) {
	const { guest, cabinList, setCabinList } = useContext<any>(GuestContext);
	const [loaded, setLoaded] = useState(false);
	const [activeModal, setActiveModal] = useState(false);
	const [activeCard, setActiveCard] = useState<any>(null);
	const [selectedCabin, setSelectedCabin] = useState<any>(null);
	const [noLodgingNotice, setNoLodgingNotice] = useState(false);
	const [hideCabins, setHideCabins] = useState(false);
	const offsiteCabin = selectedCabin?.id === 24;

	const [acceptLodging, setAcceptLodging] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		let controller = new AbortController();
		(async () => {
			let currentCabinList = await getLodgings();
			setCabinList(currentCabinList);

			let current = await getSelectedGuest(guest.id);
			setCurrentState(current);
			setLoaded(true);
		})();
		return () => controller?.abort();
	}, []);

	function setCurrentState(current) {
		let cabin = cabinList.find(
			(cabin) => cabin?.id === current?.lodging_id && cabin?.id
		);
		if (cabin) {
			setHideCabins(true);
			setAcceptLodging(true);
			setSelectedCabin(cabin);
			setActiveCard(cabin);
		}
		if (cabin?.id === 24) {
			setAcceptLodging(false);
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

	//offsite is cabin id 24
	const handleContinue = () => {
		if (selectedCabin === null && acceptLodging) {
			setNoLodgingNotice(true);
		} else if (selectedCabin && !acceptLodging) {
			updateGuest(guest?.id, { lodging_id: 24 });
			progressFlow();
			window.scrollTo(0, 0);
		} else if (selectedCabin && acceptLodging) {
			updateGuest(guest?.id, { lodging_id: selectedCabin?.id });
			progressFlow();
			window.scrollTo(0, 0);
		} else {
			updateGuest(guest?.id, { lodging_id: 24 });
			progressFlow();
		}
	};

	const content = (
		<span>
			You have not selected a cabin. <br />
			Please select a cabin or select "No" for lodging
		</span>
	);

	return (
		<>
			{loaded ? (
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
					<p className='description line-divider'>
						Staying in a cabin requires bringing your own bedding. While there
						are enough beds for everyone to stay in at the property, sleeping
						bags/pillows will need to be brought with you. In addition to the
						bedding, the cost of staying at a cabin onsite is $30 per person for
						the entire weekend.
					</p>

					{acceptLodging ? (
						<div>
							{selectedCabin && !offsiteCabin && (
								<SelectedCabinSection>
									<h3>You and your party are assigned to:</h3>
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
							<h3 style={{ paddingBottom: '0px', marginBottom: '5px' }}>
								{selectedCabin
									? 'Browse other options below'
									: 'Please select a cabin from the list below'}
							</h3>
							<p>
								If you have any issues selecting a cabin, or cannot find a cabin
								that will fit your entire party, please reach out to us and we
								can assist.
							</p>
							<h3 style={{ margin: '1rem 0rem 0rem 0rem' }}>Cabin List</h3>
							<CabinListContainer className={`${!hideCabins && 'open'}`}>
								{cabinList && (
									<CabinCardsContainer>
										{cabinList.map((cabin, index) => {
											if (cabin.lodging_type !== 'appartment') {
												return (
													<Card
														disable={hideCabins}
														image={cabin?.image_url}
														name={cabin?.name}
														type={cabin?.lodging_type}
														remaining={cabin?.spots_remaining}
														onClick={() => handleCardClick(cabin)}
														key={`cabin-card-${index}`}
													/>
												);
											}
										})}
									</CabinCardsContainer>
								)}
								<ViewMoreButton
									onClick={() => setHideCabins(!hideCabins)}
									visible={hideCabins}
								>
									{hideCabins ? 'View All' : 'Collapse List'}
									<ArrowContainer className={`${!hideCabins && 'arrow-up'}`}>
										<IoIosArrowDown />
									</ArrowContainer>
								</ViewMoreButton>
							</CabinListContainer>

							{activeModal && (
								<Popup
									activeCard={activeCard}
									setHideCabins={setHideCabins}
									setSelectedCabin={setSelectedCabin}
									setActiveModal={setActiveModal}
									selectedCabin={selectedCabin}
									id={`${selectedCabin?.id}-popup`}
									open={open}
								/>
							)}
						</div>
					) : (
						<>
							<div className='sub-heading'>By selecting "No"</div>

							<p className='description'>
								By selecting no, you have opted out of lodging onsite and will
								need to find another option. The lodging page on this site
								offers some suggestions.
							</p>
						</>
					)}
					<ButtonContainer>
						<ButtonSecondary onClick={() => regressFlow()} text='Back' />
						<Button onClick={() => handleContinue()} text='Continue' />
					</ButtonContainer>
				</CabinInfoSection>
			) : (
				<Loading />
			)}
		</>
	);
}
