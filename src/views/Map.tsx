/** @format */

import styled from 'styled-components';
import map from '../assets/DeerCreekMap.jpg';

const MapPage = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	flex-direction: column;
	padding: 8rem 0rem;
	@media only screen and (max-width: 900px) {
		padding: 8rem 0rem 2rem 0rem;
	}
`;

const MapImageContainer = styled.div`
	margin: 5rem 1rem;
	box-shadow: 0px 0px 10px 2px #ededed;
	max-width: 1000px;
	img {
		width: 100%;
	}
	@media only screen and (max-width: 900px) {
		margin: 2rem 1rem;
	}
`;

const MapContainer = styled.div`
	justify-content: center;
	align-items: center;
`;

export default function Map() {
	return (
		<MapPage>
			<MapContainer>
				<MapImageContainer>
					<img src={map} alt='' />
				</MapImageContainer>
			</MapContainer>
		</MapPage>
	);
}
