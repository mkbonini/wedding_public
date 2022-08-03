/** @format */

import React from 'react';
import styled from 'styled-components';
// import ContentBlock from '../../components/ContentBlock';
// import heartIcon from '../../assets/heart-inactive.png';
// import heart from '../../assets/icons/1.png';
import note from '../../assets/note.png';

const DetailsPage = styled.div<{ visible: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 600px;
	padding-top: 7rem;
	filter: ${(p) => (p.visible ? 'blur(8px)' : 'unset')};
	h1,
	h2,
	h3 {
		font-family: 'Lexend', sans-serif;
		weight: 500;
		text-align: center;
	}
	h2 {
		max-width: 250px;
		margin: auto;
		padding: 20px;
		font-size: 30px;
	}
	h1 {
	}
	strong {
		font-size: 20px;
		padding-bottom: 5px;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 100%;
	img#heart {
		width: 40px;
		height: 40px;
		margin: 0;
		padding: 0;
	}
	img#note {
		height: 270px;
		margin: 0;
		padding: 0;
	}
	img#paper {
		max-width: 500px;
	}
`;

const ContentWidth = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 900px;
	margin: 0rem 1rem;
	span {
		text-align: center;
	}
`;

const Break = styled.div`
	border-bottom: 3px solid darkkhaki;
	width: 95%;
	margin: 3rem 0rem;
`;

export default function Details({ visible }) {
	return (
		<>
			<DetailsPage visible={visible}>
				<ContentWidth>
					{/* <ImageContainer>
							<img src={heartIcon} alt='heart' id='heart' />
						</ImageContainer> */}
					<h2>
						We're getting married! <br />
					</h2>
					<p style={{ margin: '0rem 1rem', textAlign: 'center' }}>
						We can't wait to see you! Below are details about the weekend,
						ceremony, activities and other important details. If you find any
						questions unanswered on the site please let us know.
					</p>
					<Break />
					<ImageContainer>
						<img src={note} alt='note' id='note' />
					</ImageContainer>
					<ContentWidth>
						<h2>Our Wedding Weekend</h2>
						<span style={{ paddingBottom: '20px' }}>
							Oh yeah, a whole weekend! We want to be able to catch up not just
							for 5 minutes during the reception but over the entire weekend!
						</span>
						<strong>Address:</strong>
						228 S Pine Dr, Bailey, CO 80421
						<br />
						<br />
						<strong>Date:</strong>
						July 21-23, 2023
						<br />
						<br />
						<strong>Time:</strong>
						Check in anytime after 12:00 PM Friday
						<br />
						Check out before 12:00 PM Sunday
					</ContentWidth>
					<Break />
					<h2>Wedding Ceremony</h2>
					<span>
						Our ceremony will be outside
						<br />
						under the aspen trees
						<br /> <br />
					</span>
					<strong>Date:</strong>
					Saturday July 22, 2023
					<br />
					<br />
					<strong>Attire:</strong>
					Dress code is casual-semi formal
					<br />
					<br />
					<strong>Time of Ceremony:</strong>
					3:00 PM
					<br />
					<br />
					<Break />
					<h2>Reception</h2>
					<span>
						Yard games, drinks, dinner and
						<br />
						dancing will follow the ceremony
					</span>
					<br />
					<strong>Cocktail Hour:</strong>
					3:45 PM - 5:00 PM
					<br /> <br />
					<strong>Reception</strong>
					5:00 PM - 10:00 PM
					<br /> <br />
					<Break />
				</ContentWidth>
			</DetailsPage>
		</>
	);
}
