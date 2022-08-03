/** @format */

import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Slider() {
	return (
		<>
			<Carousel
				plugins={[
					'infinite',
					'arrows',
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 1,
						},
					},
				]}
			>
				<img src='https://i.ibb.co/VCRwqgm/IMG-5645.jpg' alt='IMG-5645' />
				<img src='https://i.ibb.co/SXDTTWP/IMG-5141.jpg' alt='IMG-5141' />
				<img
					src='https://i.ibb.co/Z6NrTgB/IMG-20160717-180748.jpg'
					alt='IMG-20160717-180748'
				/>
				<img
					src='https://i.ibb.co/0FyM0vw/20170903-181941.jpg'
					alt='20170903-181941'
				/>
				<img
					src='https://i.ibb.co/tZNLgjV/20170611-141422.jpg'
					alt='20170611-141422'
				/>
				<img
					src='https://i.ibb.co/MgzvBpg/20160227-150140.jpg'
					alt='20160227-150140'
				/>
				<img src='https://i.ibb.co/4M44G19/IMG-2756.jpg' alt='IMG-2756' />
				<img src='https://i.ibb.co/Y3Fw5ML/IMG-2541.jpg' alt='IMG-2541' />
				<img src='https://i.ibb.co/VJh1vtv/IMG-2227.jpg' alt='IMG-2227' />
			</Carousel>
		</>
	);
}
