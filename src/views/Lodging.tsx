/** @format */

import React, { useState } from 'react';
import map from '../assets/DeerCreekMap.jpg';
import { cabinInfo } from './utils/getLodgingFAQ';
import Modal from '../components/Modal';
import coloradoMap from '../assets/map.png';
import lodging from '../assets/lodging.png';
import distanceTo from '../assets/distance-to.png';
import more from '../assets/more.png';
import {
	Title,
	LodgingContainer,
	MapContainer,
	MapImageContainer,
	CabinCard,
	CabinInfoContainer,
	ImageContainer,
	LodgingPage,
} from './styled-components';

export default function Lodging() {
	const [visible, setVisible] = useState(false);
	const [cabinClicked, setCabinClicked] = useState('');

	const disableBody = () => {
		let bodyStyle = document.getElementById('body')?.style.overflow;
		bodyStyle = 'hidden';
	};

	const handleClick = (id: string) => {
		setVisible(true);
		setCabinClicked(id);
		disableBody();
	};

	return (
		<LodgingPage>
			<Modal
				setVisible={setVisible}
				visible={visible}
				data={cabinInfo}
				cabinClicked={cabinClicked}
			/>
			<Title>
				<ImageContainer id='lodging'>
					<img src={lodging} alt='' />
				</ImageContainer>

				<h3>Deer Creek Mountain Camp - 228 S Pine Dr, Bailey, CO 80421</h3>
				<p>
					Deer Creek Mountain Camp is a stunning camp with near 120 beds in
					cabins surrounded by aspens and wildlife. It is a truly beautiful and
					unique venue, and our preference is that guests sleep onsite if they
					can. We are asking $30 per person which covers the two evenings
					(Friday and Saturday) which can be paid on the registry tab.
					<br />
					<br /> Note: If you are lodging on site, please reserve your spot
					below. If you have any issues with reserving your spot, please email
					Miwha at{' '}
					<a href='mailto: miwha.geschwind@gmail.com'>
						miwha.geschwind@gmail.com
					</a>
				</p>
			</Title>
			<LodgingContainer>
				<h2>Cabin Information</h2>
				<CabinInfoContainer>
					{cabinInfo.map((cabin) => {
						return (
							<CabinCard
								color={cabin.color}
								onClick={() => handleClick(cabin.id)}
							>
								<img id='more' src={more} alt='' />
								<ImageContainer>
									<img src={cabin.cabinImage} alt='' />
								</ImageContainer>
								<div id='cabin-card-copy'>
									<p>
										<div id='base' />
										{cabin.capacity}
										{cabin.capacity === 1
											? `/ ${cabin.capacity} spot available`
											: `/ ${cabin.capacity}  spots available`}
									</p>
									<h1>
										{cabin.name} - <br />
										{cabin.cardDescription}
									</h1>
								</div>
							</CabinCard>
						);
					})}
				</CabinInfoContainer>
				<MapContainer>
					<MapImageContainer>
						<img src={map} alt='' />
					</MapImageContainer>
				</MapContainer>
			</LodgingContainer>
			<Title>
				<h2>Additional Lodging</h2>
				<ImageContainer id='colorado-map'>
					<img src={coloradoMap} alt='colorado map' />
				</ImageContainer>
				<p>
					Bailey, CO is an hour outside of Denver. Between Denver and Bailey
					there are plenty or Air bnb options with Confier being the closest
					small town. Refer to the map to see neighboring towns.
				</p>

				<span>
					Bailey, CO:{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.airbnb.com/s/Bailey--CO/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.506147143646864&ne_lng=-105.38012221385952&sw_lat=39.340923016158364&sw_lng=-105.57374015380856&zoom=12&search_by_map=true&search_type=user_map_move&query=Bailey%2C%20CO'
					>
						Bailey Air Bnbs
					</a>
				</span>
				<span>
					Denver, CO:{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.airbnb.com/s/Bailey--CO/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.506147143646864&ne_lng=-105.38012221385952&sw_lat=39.340923016158364&sw_lng=-105.57374015380856&zoom=12&search_by_map=true&search_type=user_map_move&query=Bailey%2C%20CO'
					>
						Denver Air Bnbs
					</a>
				</span>
				<span>
					Lakewood, CO:{' '}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.airbnb.com/s/Lakewood--CO--United-States/homes?flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&source=structured_search_input_header&search_type=autocomplete_click&query=Lakewood%2C%20CO%2C%20United%20States&place_id=ChIJt3LdXG-Ba4cRl87Q8fpdkJ4'
					>
						Lakewood Air Bnbs
					</a>
				</span>
				<br />
				<br />
				<br />
				<h2>What's Around?</h2>

				<ImageContainer id='distance'>
					<img src={distanceTo} alt='' />
				</ImageContainer>
			</Title>
		</LodgingPage>
	);
}
