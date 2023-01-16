/** @format */

import note from '../../assets/note.png';
import cobra from '../../assets/cobra.png';
import heart from '../../assets/heart.png';
import smiley from '../../assets/smiley.png';
import {
	DetailsPage,
	ContentContainer,
	DetailSection,
	ImageContainer,
} from './styled-components';
export default function Details() {
	return (
		<>
			<DetailsPage>
				<ContentContainer id='venue' eyebrowColor='#FF99FF' align='start'>
					<DetailSection>
						<div className='eyebrow'>the venue</div>
						<h2>deer creek mountain camp</h2>
						<h3>228 S Pine Dr, Bailey, CO 80421</h3>
						<p>
							Deer Creek Mountain Camp is a stunning venue surrounded by aspens
							and wildlife. It sits on a 125 acre property, with plenty of
							activities and views to enjoy. It is about 1.5 hours from DIA, and
							45 minutes from Denver. It has plenty of lodging, beautiful halls,
							an indoor gym, outdoor volleyball court, a disc golf course on
							site and more! <br />
							<br />
							Everything is centrally located, however moving from the ceremony
							site to the dining hall and cabins does require some minimal
							walking. See Lodging page for more information.
						</p>
					</DetailSection>
				</ContentContainer>
				<ContentContainer id='weekend' eyebrowColor='#3366FF' align='end'>
					<ImageContainer>
						<img src={note} alt='' />
					</ImageContainer>
					<DetailSection>
						<div className='eyebrow'>the weekend</div>
						<h2>july 21-23, 2023</h2>
						<h3>friday 3:00pm - sunday 10:00am</h3>
						<p>
							One of the reasons we loved the venue so much was that we were
							able to book it for the entire weekend! In addition to that, there
							is lodging on site, meaning you can come for the entire weekend
							and don’t need to worry about driving to and from the venue and a
							potential airbnb/hotel. Please check the <strong>Lodging</strong>{' '}
							page for more details.
						</p>
					</DetailSection>
				</ContentContainer>
				<ContentContainer id='dodgeball' eyebrowColor='#C9E265' align='start'>
					<ImageContainer id='cobra'>
						<img src={cobra} alt='' />
					</ImageContainer>
					<DetailSection>
						<div className='eyebrow'>the dodgeball tournament</div>
						<h2>friday july 21</h2>
						<h3>after dinner</h3>
						<p>
							If you know anything about us, it’s that we love a good friendly
							competition. But even more when there are costumes involved! Event
							is aged 17+. You can opt in via your RSVP - participants will be
							assigned a team, and teams will be assigned a theme! <br />
							<br />
							We’ll play in the indoor gym, where there is plenty of
							space/activities (pool table, foosball ect) for spectators &
							anybody who wants to hang out but not necessarily compete. <br />
							<br />
							And yes there will be a Purple Cobras team *clap* *clap* *hiss*
						</p>
					</DetailSection>
				</ContentContainer>
				<ContentContainer id='ceremony' eyebrowColor='#3366FF' align='end'>
					<ImageContainer id='heart'>
						<img src={heart} alt='' />
					</ImageContainer>
					<DetailSection>
						<div className='eyebrow'>the ceremony</div>
						<h2>satuday july 22</h2>
						<h3>starts at 3:30 pm</h3>
						<p>
							The ceremony will take place outside among beautiful aspens.
							Attire is festive-casual. Think bright colors, fun dresses or
							florals. At the end of the day though we also just want you to be
							comfortable. So wear what you like!
						</p>
					</DetailSection>
				</ContentContainer>
				<ContentContainer id='reception' eyebrowColor='#FF99FF' align='start'>
					<ImageContainer id='smiley'>
						<img src={smiley} alt='' />
					</ImageContainer>
					<DetailSection>
						<div className='eyebrow'>the reception</div>
						<h2>following the ceremony</h2>
						<h3>get ready to boogie</h3>
						<p>
							We can’t wait to celebrate with you! Cocktail hour, yard games,
							drinks, dinner and dancing will follow the ceremony!
						</p>
					</DetailSection>
				</ContentContainer>
			</DetailsPage>
		</>
	);
}
