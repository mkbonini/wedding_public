/** @format */
import { useState, createContext } from 'react';

export const GuestContext = createContext({});

export const GuestProvider = (props) => {
	const emptyGuest = {
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
	};
	const [guest, setGuest] = useState(emptyGuest);

	return (
		<GuestContext.Provider
			value={{
				guest,
				setGuest,
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};
