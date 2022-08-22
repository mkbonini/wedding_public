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

export async function getGuests(setGuestList: Function) {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com/guests',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		setGuestList(result);
		console.log('making request to guets api');
	} catch (err) {
		console.log(err);
	}
}
