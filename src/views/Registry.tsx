/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import UnderConstruction from '../components/UnderConstruction';

const RegistryPage = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding-top: 8rem;
	height: 80vh;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	padding: 6rem 1rem;
	height: 80vh;
	h1 {
		font-size: 25px;
		color: black;
		font-weight: 300;
		text-align: center;
	}
`;

export default function Registry({ visible }) {
	const [underConstruction, setUnderConstruction] = useState(false);
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<RegistryPage visible={visible}>
					<Title>
						<h1>
							Hi! ☻
							<br />
							We will open this page up <br />
							closer to the wedding <br />♡
						</h1>
					</Title>
				</RegistryPage>
			)}
		</>
	);
}
