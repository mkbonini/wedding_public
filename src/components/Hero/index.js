/** @format */

import React from 'react';
import { HeroWrapper } from './styled-components';
import heroImage from '../../assets/hero2.png';

export default function Hero() {
	return (
		<>
			<HeroWrapper>
				<img style={{ width: '100%' }} src={heroImage} alt='mike and miwha' />
			</HeroWrapper>
		</>
	);
}
