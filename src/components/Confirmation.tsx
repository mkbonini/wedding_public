/** @format */

import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Title = styled.div`
	padding: 0rem 1rem 0rem 2rem;
	max-width: 700px;
	text-align: center;
`;

const ExitButton = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 20px 20px 0px 0px;
	font-size: 25px;
	svg {
		z-index: 10001;
		:hover {
			cursor: pointer;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 3rem 0rem 4rem -2rem;
	gap: 20px;
`;

const ContentGroup = styled.div`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 900px) {
		flex-direction: row;
	}
`;

export default function Popup({
	submitRsvpDecline,
	setSubmitRsvpDecline,
	rsvp,
	progressFlow,
}) {
	const handledeclineSubmit = () => {
		progressFlow(rsvp);
	};

	const handleExit = () => {
		setSubmitRsvpDecline(false);
	};

	const theme = useTheme();

	const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				open={submitRsvpDecline}
				onClose={handleExit}
				aria-labelledby='responsive-dialog-title'
				scroll='body'
				sx={{ marginTop: '5rem' }}
				maxWidth={'sm'}
			>
				<ExitButton>
					<GrClose onClick={() => handleExit()} />
				</ExitButton>
				<DialogContent>
					<ContentGroup>
						<Title>
							<p>
								You selected <strong>"No"</strong> on your RSVP. Is this
								correct?
							</p>
							<ButtonContainer>
								<Button onClick={() => handledeclineSubmit()} text='Yes' />
								<Button onClick={() => handleExit()} text='No' />
							</ButtonContainer>
						</Title>
					</ContentGroup>
				</DialogContent>
			</Dialog>
		</div>
	);
}
