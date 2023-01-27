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
	const [internalGuest, setInternalGuest] = useState({
		id: 0,
		first_name: '',
		last_name: '',
		email: '',
		rsvp: '',
		diet: '',
		payment_method: '',
		arrival_date: '',
		party_count: 0,
		plus_one_count: 0,
		comments: '',
		lodging_id: 0,
		team_id: 0,
		created_at: '',
		updated_at: '',
		bed_count: 0,
		breakfast: '',
		full_name: '',
		kids: [],
		plus_ones: [],
	});

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

	console.log(internalGuest, 'internal guest');
	function contentToDisplay() {
		switch (currentStep) {
			case steps.start:
				return (
					<StartPage
						setSelectedGuest={setSelectedGuest}
						setInternalGuest={setInternalGuest}
						progressFlow={progressFlow}
					/>
				);
			case steps.contact:
				return (
					<ContactInfoPage
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						internalGuest={internalGuest}
						setInternalGuest={setInternalGuest}
					/>
				);

			case steps.cabin:
				return (
					<CabinPage
						regressFlow={regressFlow}
						progressFlow={progressFlow}
						cabinList={cabinList}
						internalGuest={internalGuest}
						setInternalGuest={setInternalGuest}
					/>
				);

			case steps.additional:
				return (
					<AdditionalPage
						setInternalGuest={setInternalGuest}
						internalGuest={internalGuest}
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
