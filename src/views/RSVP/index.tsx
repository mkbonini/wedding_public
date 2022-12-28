/** @format */

import React, { useState, useEffect } from 'react';
import { RsvpContainer, SignUpForm } from './styled-components';
import StartPage from './View/StartPage';

import ContactInfoPage from './View/ContactInfo/index';
import CabinPage from './View/CabinPage/index';
import ConfirmPage from './View/ConfirmPage';
import { getGuests, getLodgings, steps } from './Model';
import AdditionalPage from './View/AdditionalPage';

interface Guests {
	first_name: string;
	last_name: string;
}

interface Kid {
	name: string;
}

interface PlusOne {
	name: string;
}
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
	guests: Guests[];
	kids: Kid[];
	plus_ones: PlusOne[];
}

export default function RSVP() {
	const [guestList, setGuestList] = useState<any>([]);
	const [currentStep, setCurrentStep] = useState(steps.start);
	// const [currentStep, setCurrentStep] = useState(steps.contact);

	const [selectedGuest, setSelectedGuest] = useState<any>(null);
	const [declineRSVP, setDeclineRSVP] = useState(true);
	const [cabinList, setCabinList] = useState([]);

	// const [verified, setVarified] = useState(false);

	useEffect(() => {
		(async () => {
			let guestResult = await getGuests();
			let lodgingResult = await getLodgings();
			setGuestList(guestResult);
			setCabinList(lodgingResult);
		})();
	}, []);

	function progressFlow() {
		switch (currentStep) {
			case steps.start:
				setCurrentStep(steps.contact);
				break;
			case steps.contact:
				setCurrentStep(steps.cabin);
				break;
			case steps.cabin:
				setCurrentStep(steps.additional);
				break;
			case steps.additional:
				setCurrentStep(steps.confirm);
				break;
			default:
				setCurrentStep(steps.start);
		}
	}

	function regressFlow() {
		switch (currentStep) {
			case steps.contact:
				setCurrentStep(steps.start);
				break;
			case steps.cabin:
				setCurrentStep(steps.contact);
				break;
			case steps.additional:
				setCurrentStep(steps.cabin);
				break;
			case steps.confirm:
				setCurrentStep(steps.additional);
				break;
			default:
				setCurrentStep(steps.start);
		}
	}

	function contentToDisplay() {
		switch (currentStep) {
			case steps.start:
				return (
					<StartPage
						guestList={guestList}
						setSelectedGuest={setSelectedGuest}
						selectedGuest={selectedGuest}
						progressFlow={progressFlow}
					/>
				);
			case steps.contact:
				return (
					<ContactInfoPage
						selectedGuest={selectedGuest}
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						declineRSVP={declineRSVP}
						setDeclineRSVP={setDeclineRSVP}
					/>
				);

			case steps.cabin:
				return (
					<CabinPage
						selectedGuest={selectedGuest}
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						cabinList={cabinList}
						setCabinList={setCabinList}
					/>
				);

			case steps.additional:
				return (
					<AdditionalPage
						guestList={guestList}
						setSelectedGuest={setSelectedGuest}
						selectedGuest={selectedGuest}
						progressFlow={progressFlow}
						regressFlow={regressFlow}
					/>
				);

			case steps.confirm:
				return (
					<ConfirmPage
						selectedGuest={selectedGuest}
						regressFlow={regressFlow}
						progressFlow={progressFlow}
					/>
				);
			default:
				setCurrentStep(steps.start);
		}
	}

	return (
		<>
			<RsvpContainer>
				<SignUpForm>{contentToDisplay()}</SignUpForm>
			</RsvpContainer>
		</>
	);
}
