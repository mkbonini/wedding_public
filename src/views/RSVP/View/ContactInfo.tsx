/** @format */

export default function ContactInfo({
	regressFlow,
	progressFlow,
	selectedGuest,
}) {
	function handleBackButton() {
		regressFlow();
	}
	return (
		<>
			<div style={{ paddingBottom: '20px' }}>
				<span>
					You are RSVP'ing as{' '}
					<span style={{ fontWeight: 800 }}>
						{`${selectedGuest.first_name} ${selectedGuest.last_name}`}
					</span>
					. To deselect and return to search, click{' '}
				</span>
				<span onClick={() => handleBackButton()} style={{ fontWeight: 800 }}>
					back
				</span>
			</div>
		</>
	);
}
