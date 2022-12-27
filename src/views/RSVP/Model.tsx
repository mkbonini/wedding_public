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
		const response = await fetch('https://wedding-backend.fly.dev/guests', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				accept: 'application/json',
				X_API_KEY: 'ad7c95ec-dc13-43a4-8b20-408d4314279b',
			},
		});

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log('making request to guets api', result);
		return result;
	} catch (err) {
		console.log(err);
	}
}

export async function getLodgings() {
	try {
		const response = await fetch('https://wedding-backend.fly.dev/lodgings', {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				accept: 'application/json',
				X_API_KEY: 'ad7c95ec-dc13-43a4-8b20-408d4314279b',
			},
		});

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log('making request to guets api', result);
		return result;
	} catch (err) {
		console.log(err);
	}
}
