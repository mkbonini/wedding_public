/** @format */

import React, { useState, useEffect } from 'react';
import { RsvpContainer, SignUpForm } from './styled-components';
import StartPage from './View/StartPage';

import ContactInfoPage from './View/ContactInfo/index';
import CabinPage from './View/CabinPage/index';
import ConfirmPage from './View/ConfirmPage';
import { getLodgings, steps } from './Model';
import AdditionalPage from './View/AdditionalPage/index';

export default function RSVP() {
	const [currentStep, setCurrentStep] = useState(steps.start);
	const [selectedGuest, setSelectedGuest] = useState<any>(null);
	const [cabinList, setCabinList] = useState<any>([]);

	const selectedCabin = () => {
		if (cabinList) {
			return cabinList.find((cabin) => cabin?.id === selectedGuest?.lodging_id);
		}
	};

	useEffect(() => {
		(async () => {
			let lodgingResult = await getLodgings();
			setCabinList(lodgingResult);
		})();
	}, []);

	function progressFlow(rsvp) {
		switch (currentStep) {
			case steps.start:
				setCurrentStep(steps.contact);
				break;
			case steps.contact:
				if (rsvp === 'no') {
					setCurrentStep(steps.confirm);
				} else {
					setCurrentStep(steps.cabin);
				}
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
					/>
				);

			case steps.cabin:
				return (
					<CabinPage
						selectedGuest={selectedGuest}
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						cabinList={cabinList}
						selectedCabin={selectedCabin}
					/>
				);

			case steps.additional:
				return (
					<AdditionalPage
						selectedGuest={selectedGuest}
						progressFlow={progressFlow}
						regressFlow={regressFlow}
					/>
				);

			case steps.confirm:
				return <ConfirmPage selectedGuest={selectedGuest} />;
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
