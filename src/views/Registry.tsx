/** @format */

import styled from 'styled-components';

const RegistryPage = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding-top: 12rem;
	height: 90vh;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	padding: 7rem 1rem;
	height: 80vh;
	h1 {
		font-size: 25px;
		color: black;
		font-weight: 300;
		text-align: center;
		font-family: 'Lazydog';
	}
`;

export default function Registry() {
	return (
		<RegistryPage>
			<Title>
				<h1>
					Hello there!
					<br />
					The Registry page <br />
					is coming soon
					<br />
				</h1>
			</Title>
		</RegistryPage>
	);
}
