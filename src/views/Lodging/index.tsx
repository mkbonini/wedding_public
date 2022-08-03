/** @format */

import React, { useState } from 'react';
import map from '../../assets/DeerCreekMap.jpg';
import { cabinInfo } from './utils/getLodgingCabinDetails.js';
import UnderConstruction from '../../components/UnderConstruction';
import distanceTo from '../../assets/distance-to.png';
import more from '../../assets/more.png';
import { FAQ } from './utils/getLodgingFAQ';
import Accordian from '../../components/Accordian';
import {
	SubTitles,
	LodgingContainer,
	MapContainer,
	MapImageContainer,
	CabinCard,
	CabinInfoContainer,
	ImageContainer,
	LodgingPage,
	CabinContent,
	ContentCenter,
	AdditionalLodgingLinks,
	Description,
} from './styled-components';

export default function Lodging({ visible }) {
	const [clicked, setClicked] = useState(0);
	const [underConstruction, setUnderConstruction] = useState(true);

	const displayAnswer = (index) => {
		if (clicked === index) {
			return setClicked(0);
		}
		setClicked(index);
	};
	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<LodgingPage visible={visible}>
					<LodgingContainer>
						<Description>
							<div>
								<p>
									Deer Creek Mountain Camp is a stunning venue surrounded by
									aspens and wildlife. Our preference is that guests sleep
									onsite if they can. Please see the FAQ section for all your
									questions.
								</p>
							</div>
						</Description>
						<MapContainer>
							<MapImageContainer>
								<img src={map} alt='' />
							</MapImageContainer>
						</MapContainer>
						<SubTitles direction='left'>
							<div>
								<h1>Available Lodging</h1>
							</div>
						</SubTitles>
						<CabinContent>
							<CabinInfoContainer>
								{cabinInfo.map((cabin, index) => {
									return (
										<CabinCard key={index} color={cabin.color}>
											<img id='more' src={more} alt='' />
											<ImageContainer>
												<img src={cabin.cabinImage} alt='' />
											</ImageContainer>
											<div id='cabin-card-copy'>
												<div id='capacity'>
													<div id='base' />
													<p>
														{cabin.capacity}
														{cabin.capacity === 1
															? `/ ${cabin.capacity} spot available`
															: `/ ${cabin.capacity}  spots available`}
													</p>
												</div>
												<p>
													{cabin.name} - <br />
													{cabin.cardDescription}
												</p>
											</div>
										</CabinCard>
									);
								})}
							</CabinInfoContainer>
						</CabinContent>
					</LodgingContainer>
					<SubTitles direction='right'>
						<div>
							<h1>Additional Lodging</h1>
						</div>
					</SubTitles>
					<Description>
						<div>
							<p>
								Bailey, CO is an hour outside of Denver. Between Denver and
								Bailey there are plenty or Air bnb options with Confier being
								the closest small town. Refer to the map to see neighboring
								towns.
							</p>
						</div>
					</Description>
					<ContentCenter>
						<AdditionalLodgingLinks>
							<span>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.airbnb.com/s/Bailey--CO/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.506147143646864&ne_lng=-105.38012221385952&sw_lat=39.340923016158364&sw_lng=-105.57374015380856&zoom=12&search_by_map=true&search_type=user_map_move&query=Bailey%2C%20CO'
								>
									Bailey Air Bnbs
								</a>
							</span>
							<span>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.airbnb.com/s/Denver--Colorado--United-States/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&search_type=autocomplete_click&query=Denver%2C%20Colorado%2C%20United%20States&place_id=ChIJzxcfI6qAa4cR1jaKJ_j0jhE&checkin=2023-07-21&checkout=2023-07-23&source=structured_search_input_header'
								>
									Denver Air Bnbs
								</a>
							</span>
							<span>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.airbnb.com/s/Lakewood--CO--United-States/homes?flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&source=structured_search_input_header&search_type=autocomplete_click&query=Lakewood%2C%20CO%2C%20United%20States&place_id=ChIJt3LdXG-Ba4cRl87Q8fpdkJ4'
								>
									Lakewood Air Bnbs
								</a>
							</span>
							<span>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://www.airbnb.com/s/Conifer--Colorado--United-States/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&search_type=autocomplete_click&query=Conifer%2C%20Colorado%2C%20United%20States&place_id=ChIJA7bcoFFxa4cRzyG8MMfi3iM&source=structured_search_input_header'
								>
									Conifer Air Bnbs
								</a>
							</span>
						</AdditionalLodgingLinks>
					</ContentCenter>
					<SubTitles direction='left'>
						<div>
							<h1>What's Around?</h1>
						</div>
					</SubTitles>
					<ContentCenter>
						<ImageContainer id='distance'>
							<img src={distanceTo} alt='' />
						</ImageContainer>
					</ContentCenter>
					<SubTitles direction='right'>
						<div>
							<h1>FAQ</h1>
						</div>
					</SubTitles>
					<ContentCenter>
						<Accordian FAQ={FAQ} clickEvent={displayAnswer} clicked={clicked} />
					</ContentCenter>
				</LodgingPage>
			)}
		</>
	);
}
