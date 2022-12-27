/** @format */

import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
	minWidth: '290px',
	[theme.breakpoints.down('sm')]: {
		minWidth: '250px',
	},
}));

export default function StandardTextField({
	label,
	onChange = (e) => e,
	required,
	type,
	defaultValue = '',
}) {
	return (
		<Input
			id='standard-basic'
			label={label}
			variant='standard'
			onChange={(e) => onChange(e)}
			required={required}
			type={type}
			defaultValue={defaultValue}
		/>
	);
}
