/** @format */

import {
	DetailsPage,
	ContentContainer,
	DetailSection,
	MobileSeperator,
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
							walking. See the map page for view of the venue layout.
						</p>
					</DetailSection>
				</ContentContainer>
				<MobileSeperator />
				<ContentContainer id='weekend' eyebrowColor='#3366FF' align='end'>
					<DetailSection>
						<div className='eyebrow'>the weekend</div>
						<h2>july 21-23, 2023</h2>
						<h3>friday 3:00pm - sunday 10:00am</h3>
						<p>
							One of the reasons we loved the venue so much was that we were
							able to book it for the entire weekend! In addition to that, there
							is lodging on site, meaning you can come for the entire weekend
							and don’t need to worry about driving to and from the venue and a
							potential airbnb/hotel. Please check the lodging page for more
							details.
						</p>
					</DetailSection>
				</ContentContainer>
				<MobileSeperator />
				<ContentContainer id='dinner' eyebrowColor='#C9E265' align='start'>
					<DetailSection>
						<div className='eyebrow'>arrival dinner</div>
						<h2>july 21, 2023</h2>
						<h3>friday 6:00pm</h3>
						<p>
							We know plenty of people will be traveling in on Friday and
							Saturday, and perhaps arriving at different times. However we want
							to make sure that the people who arrive Friday can relax and enjoy
							dinner and so we will be hositng a BBQ Friday evening with drinks
							before any evening games.
						</p>
					</DetailSection>
				</ContentContainer>
				<MobileSeperator />
				<ContentContainer id='dodgeball' eyebrowColor='#3366FF' align='end'>
					<DetailSection>
						<div className='eyebrow'>the dodgeball tournament</div>
						<h2>friday july 21</h2>
						<h3>7:30pm</h3>
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
				<MobileSeperator />
				<ContentContainer id='ceremony' eyebrowColor='#FF99FF' align='start'>
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
				<MobileSeperator />
				<ContentContainer id='reception' eyebrowColor='#C9E265' align='end'>
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
