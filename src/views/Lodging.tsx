/** @format */

import React, {useState} from 'react';
import styled from 'styled-components';
import map from '../assets/DeerCreekMap.jpg';
import cabin1 from '../assets/cabin-1.png';
import cabin2 from '../assets/cabin-2.png';
import cabin3 from '../assets/cabin-3.png';
import cabin4 from '../assets/cabin-4.png';
import camper1 from '../assets/camper-1.png';
import camper2 from '../assets/camper-2.png';
import camper3 from '../assets/camper-3.png';
import camper4 from '../assets/camper-4.png';
import Modal from '../components/Modal'

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
	max-width: 50px;

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
	min-width: 300px;
	&:hover {
		background-color: ${(p) => p.color && ` ${p.color}`};
		opacity: 0.9;
	}
	h1{
		font-size: 26px;
		padding:0;
		margin:0;
	}
	h3{
		padding: 0;
		margin:0
	}
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const cabinInfo = [
	{
		name: 'Humming Bird',
		capacity: 12,
		image: cabin1,
		color: '#E3A335',
	},
	{
		name: 'Spruce',
		capacity: 12,
		image: cabin2,
		color: '#F7669B',
	},
	{
		name: 'Lark',
		capacity: 12,
		image: cabin3,
		color: '#6691F4',
	},
	{
		name: 'Moose',
		capacity: 12,
		image: cabin4,
		color: '#D0F766',
	},
	{
		name: "Bear's Cave",
		capacity: 12,
		image: cabin1,
		color: '#E3A335',
	},
	{
		name: "Crow's Nest",
		capacity: 12,
		image: cabin2,
		color: '#F7669B',
	},
	{
		name: "Black Bear 1",
		capacity: 12,
		image: cabin3,
		color: '#6691F4',
	},
	{
		name: "Black Bear 2",
		capacity: 12,
		image: cabin4,
		color: '#D0F766',
	},
	{
		name: "Pine",
		capacity: 12,
		image: cabin1,
		color: '#E3A335',
	},
	{
		name: "Jackalope",
		capacity: 12,
		image: cabin2,
		color: '#F7669B',
	},
	{
		name: "Arapahoe",
		capacity: 12,
		image: cabin3,
		color: '#6691F4',
	},
	{
		name: "Sasquach",
		capacity: 12,
		image: cabin4,
		color: '#D0F766',
	},
	{
		name: "Aspen",
		capacity: 12,
		image: cabin1,
		color: '#E3A335',
	},
	{
		name: "RV #1",
		capacity: 1,
		image: camper2,
		color: '#F7669B',
	},
	{
		name: "RV #2",
		capacity: 1,
		image: camper3,
		color: '#6691F4',
	},
	{
		name: "RV #3",
		capacity: 1,
		image: camper4,
		color: '#D0F766',
	},
	{
		name: "RV #4",
		capacity: 1,
		image: camper1,
		color: '#E3A335',
	},
	{
		name: "RV #5",
		capacity: 1,
		image: camper2,
		color: '#F7669B',
	},
	{
		name: "RV #6",
		capacity: 1,
		image: camper3,
		color: '#6691F4',
	},
];
export default function Lodging() {
	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible(true)
	}

	return (
		<>
		<Modal setVisible={setVisible} visible={visible}/>
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
						<CabinInfoContainer color={cabin.color} onClick={handleClick} >
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
