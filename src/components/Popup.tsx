/** @format */

import { useContext } from 'react';
import styled from 'styled-components';
import { TbBrandAirbnb } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import ButtonFullWidth from './ButtonFullWidth';
import ButtonError from './ButtonError';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { GuestContext } from '../context/GuestContext';

const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 200px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 5px;
	width: 100%;
	@media only screen and (min-width: 900px) {
		height: 500px;
		min-width: 500px;
	}
`;

const Title = styled.div`
	padding: 0rem 1rem 0rem 2rem;
	max-width: 600px;
	min-width: 600px;
	@media only screen and (max-width: 1200px) {
		min-width: unset;
	}
	h1 {
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
	span {
		font-family: 'Circular-Light';
	}
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
	flex-direction: column;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`;

export default function Popup({
	open,
	setOpen,
	activeCard,
	setSelectedCabin,
	setActiveModal,
	noCabinSelected,
	selectedCabin,
	setHideCabins,
	id,
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

	const { guest } = useContext<any>(GuestContext);

	const handleSelectCabin = () => {
		if (activeCard === selectedCabin) {
			setActiveModal(false);
			setSelectedCabin(null);
			setHideCabins(false);
		} else {
			setActiveModal(false);
			setSelectedCabin(activeCard);
			setHideCabins(true);
		}
	};

	const handleExit = () => {
		setActiveModal(false);
	};

	const theme = useTheme();

	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const determineButtonText = () => {
		if (guest.bed_count > spots_remaining)
			return 'Not enough beds for your party';
		else return 'Select This Cabin';
	};
	return (
		<div key={id}>
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleExit}
				aria-labelledby='responsive-dialog-title'
				scroll='body'
				sx={{ marginTop: '5rem' }}
				maxWidth={'xl'}
			>
				<ExitButton>
					<GrClose onClick={() => handleExit()} />
				</ExitButton>
				<DialogContent>
					<ContentGroup>
						<Image image={image_url ? image_url : dummyImage} />
						<Title>
							<h1>{name}</h1>
							<div className='links' onClick={() => window.open(url)}>
								<div className='airbnb-link'>
									<TbBrandAirbnb /> View on Airbnb
								</div>
							</div>
							<p className='description'> {description}</p>

							<CabinSpotContainer>
								{occupants.map((occupant, index) => {
									return (
										<CabinSpot
											key={index}
											color={occupant !== 'Spot Available' ? color : '#242424'}
										>
											<div className='spot-number'>{index + 1}</div>
											<span>{occupant}</span>
										</CabinSpot>
									);
								})}
							</CabinSpotContainer>

							<ButtonContainer>
								{activeCard === selectedCabin ? (
									<ButtonError
										onClick={() => handleSelectCabin()}
										text='Deselect This Cabin'
										fullWidth
									/>
								) : (
									<ButtonFullWidth
										disabled={guest.bed_count > spots_remaining}
										onClick={() => handleSelectCabin()}
										text={determineButtonText()}
									/>
								)}
							</ButtonContainer>
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}
