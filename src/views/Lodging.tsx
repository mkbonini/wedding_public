/** @format */

import React from 'react';
import styled from 'styled-components';
import map from '../assets/DeerCreekMap.jpg';
import cabin1 from '../assets/cabin-1.png';
import cabin2 from '../assets/cabin-2.png';
import cabin3 from '../assets/cabin-3.png';
import cabin4 from '../assets/cabin-4.png';

const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	h1 {
		font-size: 45px;
		color: black;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

const ImageContainer = styled.div`
	max-width: 70px;

	img {
		width: 100%;
	}
`;

const MapImageContainer = styled.div`
	max-width: 900px;
	img {
		width: 100%;
	}
`;

const MapContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CabinInfoContainer = styled.div<{ color: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 200px;
	padding: 20px;
	margin: 10px;
	border: 1px solid gray;
	border-radius: 5px;
	max-width: 500px;
	line-height: 0;
	min-width: 300px;
	&:hover {
		box-shadow: ${(p) => p.color && `12px 12px 2px 1px ${p.color}`};
	}
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const cabinInfo = [
	{
		name: 'Cabin 1',
		capacity: 12,
		image: cabin1,
		color: '#E3A335',
	},
	{
		name: 'Cabin 2',
		capacity: 12,
		image: cabin2,
		color: '#F7669B',
	},
	{
		name: 'Cabin 3',
		capacity: 12,
		image: cabin3,
		color: '#6691F4',
	},
	{
		name: 'Cabin 4',
		capacity: 12,
		image: cabin4,
		color: '#D0F766',
	},
];
export default function Lodging() {
	return (
		<>
			<Title>
				<h1>{'Lodging & Food'}</h1>
			</Title>
			<MapContainer>
				<MapImageContainer>
					<img src={map} alt='' />
				</MapImageContainer>
			</MapContainer>

			<Container>
				{cabinInfo.map((cabin) => {
					return (
						<CabinInfoContainer color={cabin.color}>
							<ImageContainer>
								<img src={cabin.image} alt='' />
							</ImageContainer>
							<h1>{cabin.name}</h1>
							<h3>{cabin.capacity} spots available</h3>
						</CabinInfoContainer>
					);
				})}
			</Container>
		</>
	);
}
