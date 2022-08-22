/** @format */

import React, { useState, useEffect } from 'react';
import {
	RsvpTitle,
	Accent,
	RsvpContainer,
	SignUpForm,
	BackgroundAccent,
} from './styled-components';
import Breadcrumbs from '../../components/Breadcrumbs';
import StartPage from './View/StartPage';
import VerifyPage from './View/VerifyPage';
import ContactInfoPage from './View/ContactInfo';
import { getGuests, steps } from './Model';

export default function RSVP() {
	const [guestList, setGuestList] = useState<any>([]);
	const [currentStep, setCurrentStep] = useState(steps.start);

	const [selectedGuest, setSelectedGuest] = useState<any>(null);

	// const [verified, setVarified] = useState(false);

	useEffect(() => {
		getGuests(setGuestList);
	}, []);

	function progressFlow() {
		switch (currentStep) {
			case steps.start:
				setCurrentStep(steps.verify);
				break;
			case steps.verify:
				setCurrentStep(steps.contact);
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
			case steps.verify:
				return (
					<VerifyPage
						setSelectedGuest={setSelectedGuest}
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						selectedGuest={selectedGuest}
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

			default:
				setCurrentStep(steps.start);
		}
	}

	return (
		<>
			<RsvpContainer>
				<Breadcrumbs location={'rsvp'} />
				{/* <RsvpTitle>
					<h1>RSVP</h1>
					<Accent />
					<h2>Deadline is June 22, 2023</h2>
				</RsvpTitle> */}
				<SignUpForm>{contentToDisplay()}</SignUpForm>
				{/* <BackgroundAccent /> */}
			</RsvpContainer>
		</>
	);
}
