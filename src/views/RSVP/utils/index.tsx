/** @format */

//handles the input recieved in the form. Notes if a input is recieved and then displays the cooresponding label.
export const handleInputRecieved = ({
	e,
	label,
	setGuestInputRecieved,
	setEmailInputRecieved,
	setChildInputRecieved,
	setNotesInputRecieved,
}) => {
	if (label === 'guest') {
		if (e.target.value.length === 0) {
			setGuestInputRecieved && setGuestInputRecieved(false);
		} else {
			setGuestInputRecieved && setGuestInputRecieved(true);
		}
	}
	if (label === 'email') {
		if (e.target.value.length === 0) {
			setEmailInputRecieved && setEmailInputRecieved(false);
		} else {
			setEmailInputRecieved && setEmailInputRecieved(true);
		}
	}
	if (label === 'child') {
		if (e.target.value.length === 0) {
			setChildInputRecieved && setChildInputRecieved(false);
		} else {
			setChildInputRecieved && setChildInputRecieved(true);
		}
	}
	if (label === 'notes') {
		if (e.target.value.length === 0) {
			setNotesInputRecieved && setNotesInputRecieved(false);
		} else {
			setNotesInputRecieved && setNotesInputRecieved(true);
		}
	}
};

//Saves what is being searched when user inputs name

