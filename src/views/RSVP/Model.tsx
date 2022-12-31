/** @format */

interface Guest {
	age: number;
	arrival_date: string;
	comments: string;
	created_at: string;
	diet: string;
	email: string;
	first_name: string;
	id: number;
	last_name: string;
	lodging_id: number;
	meals: string;
	payment_method: number;
	plus_ones: number;
	rsvp: string;
	team_id: number;
	updated_at: string;
	host_id: number;
}

export const steps = {
	start: 'START',
	verify: 'VERIFY',
	contact: 'CONTACT',
	cabin: 'CABIN',
	confirm: 'CONFIRM',
	additional: 'ADDITIONAL',
};
export function handleGuestDeselection(
	setSelectedGuest: Function,
	setSearchTerm: Function,
	setGuestInputRecieved: Function,
	setEmailInputRecieved: Function,
	setChildInputRecieved: Function,
	setNotesInputRecieved: Function,
	setCode: Function,
	setVarified: Function,
	setError: Function
) {
	setSelectedGuest(null);
	setSearchTerm('');
	setGuestInputRecieved(false);
	setEmailInputRecieved(false);
	setChildInputRecieved(false);
	setNotesInputRecieved(false);
	setCode('');
	setVarified(false);
	setError(false);
}

export async function getGuests() {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com//guest_list',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log('guests:', result);
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function getSelectedGuest(id) {
	try {
		const response = await fetch(
			`https://mm-wedding-backend.herokuapp.com//guests/${id}`,
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);
		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}
		const result = await response.json();
		console.log('selectedGuest:', result);
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function getLodgings() {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com//lodgings',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log('lodging', result);
		return result;
	} catch (err) {
		console.log(err);
	}
}

export function updateGuest(id, body) {
	fetch(`https://mm-wedding-backend.herokuapp.com/guests/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			accept: 'application/json',
			X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
		},
	});
}
