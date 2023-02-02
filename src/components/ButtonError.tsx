/** @format */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Error = styled(Button)<ButtonProps>(({ theme }) => ({
	minWidth: '100px',
	backgroundColor: '#FF3333',
	height: '50px',
	borderRadius: '100px;',
	textTransform: 'none',
	padding: '0px 50px',
	fontFamily: 'Circular-Book',
	fontSize: '14px;',
	lineHeight: '20px',
	color: '#FFDDDD',
	':hover': {
		backgroundColor: '#FFDDDD',
		color: '#FF3333',
	},
}));

export default function ButtonError({ text, onClick, fullWidth = false }) {
	return (
		<Error
			sx={{ width: fullWidth ? '100%' : 'unset', maxWidth: '500px' }}
			variant='contained'
			onClick={() => onClick()}
		>
			{text}
		</Error>
	);
}
