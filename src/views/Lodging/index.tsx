/** @format */

import distanceTo from '../../assets/distance-to.svg';
import moose from '../../assets/cabins/moose.jpg';
import sasquach from '../../assets/cabins/sasquach.jpg';
import rv from '../../assets/cabins/rv-3.jpg';
import door from '../../assets/cabins/door.png';
import volleyball from '../../assets/cabins/volleyball.png';
import ceremony from '../../assets/cabins/ceremony.png';
import dining from '../../assets/cabins/dining.png';
import beds from '../../assets/cabins/beds.png';
import gym from '../../assets/cabins/gym.png';
import Carousel from '../../components/Carousel';
import airBnb from '../../assets/airbnb.png';
import lineBreak from '../../assets/tree-break.svg';
import airbnbIcon from '../../assets/airbnb-icon.svg';

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
	LineBreakContainer,
	Section,
} from './styled-components';

export default function Lodging() {
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
		<LodgingPage>
			<LodgingContainer>
				<h1>Lodging Information</h1>
				<SubTitles>
					<div className='section'>
						<p>
							We're so excited that this venue has lodging on site. It was
							another reason we loved the venue so much, and our preference is
							that guests who are staying for the weekend stay in a cabin. It
							will cost $30/person which will cover the entire weekend (friday,
							saturday evening), and while they are pretty nice beds they do not
							come with bedding, so make sure you bring a sleeping bag/pillow
							with you.
							<br /> <br />
							If you are wanting to stay on site, you can reserve your spot in a
							cabin when you RSVP to the event. There are also 6 RV spots
							available if you happen to have an RV. Payment for a spot can be
							made on the registry site or through venmo. <br />
							<br />
						</p>
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
					</div>
				</SubTitles>
				<SubTitles>
					<div className='section airbnb-block'>
						<h2>nearby airbnbs</h2>
						<p>
							We understand that cabins may not be everyone’s cup of tea and
							some might rather have their own accommodations. If that is the
							case, there are plenty of Airbnb options in Bailey and the
							surrounding towns. All of the towns below are less than 1.25 hours
							away with the closest being Bailey of course (5-10 minutes from
							venue) and Conifer (20-25 minutes from venue).
						</p>
						<ContentCenter>
							<AdditionalContainer>
								{airBnbLinks.map((bnb, index) => {
									return (
										<>
											<ButtonContainer
												key={` links ${index}`}
												onClick={() => window.open(bnb.href)}
											>
												<AdditionalButton>
													<div id='airbnb-button-content'>
														<img src={airbnbIcon} alt='' />
													</div>
													<span>{bnb.name}</span>
												</AdditionalButton>
												<Accent id='accent' />
											</ButtonContainer>
										</>
									);
								})}
							</AdditionalContainer>
						</ContentCenter>

						<h2>additional lodging</h2>
						<p>
							In addition to Airbnb, there are also are also two lodges in town
							recommended by the owners of the venue. Both are great places and
							have wonderful hosts. Also people with mobility issues will
							appreciate the ground level rooms of Bailey Lodge.
							<br />
							<br />
							<span className='bold'>Bailey Lodge: </span>
							<br />
							57920 US Hwy 285, Bailey, CO 80421 <br />
							<br />
							<span className='bold'>Glenn Isle resort:</span>
							<br />
							573 Old Stagecoach Rd, Bailey, CO 80421
							<br />
							<br />
						</p>
					</div>
				</SubTitles>
				<Section>
					<ContentCenter>
						<ImageContainer id='distance'>
							<img src={distanceTo} alt='' />
						</ImageContainer>
					</ContentCenter>
				</Section>
			</LodgingContainer>
		</LodgingPage>
	);
}
