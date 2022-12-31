/** @format */

export const getFormValues = () => {
	let allergy = (
		document.getElementById('allergy-text-feild') as HTMLInputElement
	).value;
	let questions_comments = (
		document.getElementById('questions-comments') as HTMLInputElement
	).value;
	return {
		diet: allergy,
		comments: questions_comments,
	};
};
