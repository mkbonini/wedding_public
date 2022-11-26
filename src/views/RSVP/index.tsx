/** @format */

import React, { useState, useEffect } from 'react';
import { RsvpContainer, SignUpForm } from './styled-components';
import StartPage from './View/StartPage';

import ContactInfoPage from './View/ContactInfo/index';
import CabinPage from './View/CabinPage';
import ConfirmPage from './View/ConfirmPage';
import { getGuests, steps } from './Model';

export default function RSVP() {
	const [guestList, setGuestList] = useState<any>([]);
	const [currentStep, setCurrentStep] = useState(steps.start);
	// const [currentStep, setCurrentStep] = useState(steps.contact);

	const [selectedGuest, setSelectedGuest] = useState<any>(null);
	const [declineRSVP, setDeclineRSVP] = useState(true);
	const [cabin, setCabin] = useState(false);

	// const [verified, setVarified] = useState(false);

	useEffect(() => {
		(async () => {
			let result = await getGuests();
			setGuestList(result);
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
			default:
				setCurrentStep(steps.start);
		}
	}

	function regressFlow() {
		switch (currentStep) {
			case steps.verify:
				setCurrentStep(steps.start);
				break;
			case steps.contact:
				setCurrentStep(steps.verify);
				break;
			case steps.cabin:
				setCurrentStep(steps.contact);
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
						cabin={cabin}
						setCabin={setCabin}
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
