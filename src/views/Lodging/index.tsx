/** @format */

import React, { useState } from 'react';
import UnderConstruction from '../../components/UnderConstruction';
import distanceTo from '../../assets/distance-to.png';
import moose from '../../assets/cabins/moose.jpg';
import sasquach from '../../assets/cabins/sasquach.jpg';
import rv from '../../assets/cabins/rv-3.jpg';
import door from '../../assets/cabins/door.png';
import volleyball from '../../assets/cabins/volleyball.png';
import ceremony from '../../assets/cabins/ceremony.png';
import dining from '../../assets/cabins/dining.png';
import beds from '../../assets/cabins/beds.png';
import gym from '../../assets/cabins/gym.png';
import Breadcrumbs from '../../components/Breadcrumbs';
import Carousel from '../../components/Carousel';
import airBnb from '../../assets/airbnb.png';

import {
	SubTitles,
	LodgingContainer,
	ImageContainer,
	LodgingPage,
	ContentCenter,
	AdditionalButton,
	AdditionalContainer,
	Accent,
	ButtonContainer,
	AccentSection,
	Section,
} from './styled-components';

export default function Lodging({ visible }) {
	const [underConstruction, setUnderConstruction] = useState(false);

	const airBnbLinks = [
		{
			href: 'https://www.airbnb.com/s/Bailey--CO/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&ne_lat=39.506147143646864&ne_lng=-105.38012221385952&sw_lat=39.340923016158364&sw_lng=-105.57374015380856&zoom=12&search_by_map=true&search_type=user_map_move&query=Bailey%2C%20CO',
			name: 'bailey',
		},
		{
			href: 'https://www.airbnb.com/s/Denver--Colorado--United-States/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&search_type=autocomplete_click&query=Denver%2C%20Colorado%2C%20United%20States&place_id=ChIJzxcfI6qAa4cR1jaKJ_j0jhE&checkin=2023-07-21&checkout=2023-07-23&source=structured_search_input_header',

			name: 'denver',
		},
		{
			href: 'https://www.airbnb.com/s/Conifer--Colorado--United-States/homes?adults=2&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&search_type=autocomplete_click&query=Conifer%2C%20Colorado%2C%20United%20States&place_id=ChIJA7bcoFFxa4cRzyG8MMfi3iM&source=structured_search_input_header',

			name: 'conifer',
		},
		{
			href: 'https://www.airbnb.com/s/Lakewood--CO--United-States/homes?flexible_trip_dates%5B%5D=november&flexible_trip_dates%5B%5D=october&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&source=structured_search_input_header&search_type=autocomplete_click&query=Lakewood%2C%20CO%2C%20United%20States&place_id=ChIJt3LdXG-Ba4cRl87Q8fpdkJ4',

			name: 'lakewood',
		},
	];

	return (
		<>
			{underConstruction ? (
				<UnderConstruction />
			) : (
				<LodgingPage visible={visible}>
					<Breadcrumbs location={'lodging'} />
					<LodgingContainer>
						<Carousel
							images={[
								moose,
								door,
								sasquach,
								beds,
								rv,
								ceremony,
								volleyball,
								gym,
								dining,
							]}
						/>
						<SubTitles id='main'>
							<div className='section'>
								<h2>onsite cabins</h2>
								<p>
									We're so excited that this venue has lodging on site. It was
									another reason we loved the venue so much, and our preference
									is that guests who are staying for the weekend stay in an
									cabin. These cabins have bunk style beds that can sleep 10 in
									each cabin. Only downside is that guests will need to provide
									their own bedding (sleeping bag, pillow, sheets if you
									prefer). Staying at the venue will also cost $30/person which
									will cover the entire weekend (friday, saturday evening).
									<br />
									<br />
									The venue lodging can also accomidate over 100+ guests so
									there is plenty of space. We want guests to enjoy themselves
									while also being safe and not have to worry about driving late
									in the evening. However we also understand this might not be
									everyone’s cup of tea, so there are links below to nearby air
									bnb’s.
									<br />
									<br /> If you are wanting to stay on site, you can reserve
									your spot in a cabin or RV spot when you RSVP to the event.
									Payment for a spot can be made on the registry site or through
									venmo. There will be more info about this when you RSVP.
								</p>
							</div>
						</SubTitles>
						<AccentSection>
							<SubTitles>
								<div className='section'>
									<ImageContainer id='airbnb'>
										<img src={airBnb} alt='air bnb logo' />
									</ImageContainer>
									<h2>additional lodging</h2>
									<p>
										Below are links to Air bnb's in select towns nearby. All of
										these towns are less than 1.25 hours away from the venue.
										The closest being Baily (5-10 minutes from venue) and then
										Conifer (20-25 minutes from venue).
									</p>
								</div>
							</SubTitles>
							<ContentCenter>
								<AdditionalContainer>
									{airBnbLinks.map((bnb, index) => {
										return (
											<>
												<ButtonContainer
													key={` links ${index}`}
													onClick={() => window.open(bnb.href)}
												>
													<AdditionalButton>{bnb.name}</AdditionalButton>
													<Accent id='accent' />
												</ButtonContainer>
											</>
										);
									})}
								</AdditionalContainer>
							</ContentCenter>
						</AccentSection>
						<Section>
							<SubTitles>
								<div className='section'>
									<h2>what's around?</h2>
								</div>
							</SubTitles>
							<ContentCenter>
								<ImageContainer id='distance'>
									<img src={distanceTo} alt='' />
								</ImageContainer>
							</ContentCenter>
						</Section>
					</LodgingContainer>
				</LodgingPage>
			)}
		</>
	);
}
