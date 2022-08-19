/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import UnderConstruction from '../components/UnderConstruction';
import Breadcrumbs from '../components/Breadcrumbs';

const RegistryPage = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 8rem;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
`;

const Title = styled.div`
	padding: 20px;
	height: 500px;
	padding-top: 8rem;
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
					<Breadcrumbs location={'registry'} />
					<Title>
						<h1>
							Hi! Thanks for stopping by.
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
