/** @format */

import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
	minWidth: '300px',
	maxWidth: '320px',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		minWidth: '320px',
	},
}));

export default function StandardTextField({
	label,
	onChange = (e) => e,
	required,
	type,
	defaultValue = '',
	id = '',
	name = '',
}) {
	return (
		<Input
			id={id}
			label={label}
			onChange={(e) => onChange(e)}
			required={required}
			type={type}
			defaultValue={defaultValue}
			name={name}
		/>
	);
}
