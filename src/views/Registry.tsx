/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import UnderConstruction from '../components/UnderConstruction';

const RegistryPage = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;

	min-height: 800px;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	height: 50vh;
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
							We will open this page up <br />
							closer to the wedding ♡
						</h1>
					</Title>
				</RegistryPage>
			)}
		</>
	);
}
