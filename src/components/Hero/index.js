/** @format */

import React, { useState, useEffect } from 'react';
import { HeroWrapper } from './styled-components';
import heroImage from '../../assets/hero2.png';
import mobileImage from '../../assets/mobile_hero.png';

export default function Hero() {
	function getWindowDimensions() {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}

	function useWindowDimensions() {
		const [windowDimensions, setWindowDimensions] = useState(
			getWindowDimensions()
		);

		useEffect(() => {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}, []);

		return windowDimensions;
	}

	const { width } = useWindowDimensions();
	return (
		<>
			<HeroWrapper>
				<img
					style={{ width: '100%' }}
					src={width > 990 ? heroImage : mobileImage}
					alt='mike and miwha'
				/>
			</HeroWrapper>
		</>
	);
}
