/** @format */

export const getFormValues = () => {
	let first_name = (
		document.getElementById('first-name-input') as HTMLInputElement
	).value;
	let last_name = (
		document.getElementById('last-name-input') as HTMLInputElement
	).value;
	let email = (document.getElementById('email-input') as HTMLInputElement)
		.value;
	return {
		first_name: first_name,
		last_name: last_name,
		email: email,
	};
};

export const plusOneFormValue = () => {
	let plusOne = (document?.getElementById('plus-one-input') as HTMLInputElement)
		?.value;

	return {
		name: plusOne,
	};
};

function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export function checkForErrors({
	children,
	childCare,
	setChildCareError,
	setRsvpError,
	setFirstNameError,
	setLastNameError,
	rsvp,
	firstName,
	lastName,
	email,
	setEmailError,
	plusOneToggle,
	plusOneName,
	setPlusOneError,
}) {
	if (children && childCare === '') {
		setChildCareError(true);
	} else {
		setChildCareError(false);
	}
	if (rsvp === '') {
		setRsvpError(true);
	} else {
		setRsvpError(false);
	}
	if (firstName === '') {
		setFirstNameError(true);
	} else {
		setFirstNameError(false);
	}
	if (lastName === '') {
		setLastNameError(true);
	} else {
		setLastNameError(false);
	}
	if (!validateEmail(email)) {
		setEmailError(true);
	} else {
		setEmailError(false);
	}
	if (plusOneToggle && plusOneName === '') {
		setPlusOneError(true);
	} else {
		setPlusOneError(false);
	}

	if (
		(children && childCare === '') ||
		rsvp === '' ||
		firstName === '' ||
		lastName === '' ||
		(plusOneToggle && plusOneName === '') ||
		!validateEmail(email)
	) {
		return true;
	} else {
		return false;
	}
}
