/** @format */

/** @format */

import { Switch } from '@mui/material';

export default function Toggle({ toggleActive, onChange }) {
	return (
		<div>
			No
			<Switch checked={toggleActive} onChange={onChange} />
			Yes
		</div>
	);
}
