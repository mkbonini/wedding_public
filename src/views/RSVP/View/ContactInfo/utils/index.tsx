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
