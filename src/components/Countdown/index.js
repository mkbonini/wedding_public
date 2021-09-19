/** @format */
import React from 'react';
import styled from 'styled-components';
import butterfly from '../../assets/butterfly.png';

var end = new Date('07/21/2023 4:0 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
	var now = new Date();
	var distance = end - now;
	var countdown = document.getElementById('countdown');
	if (distance < 0 && countdown) {
		clearInterval(timer);
		countdown.innerHTML = 'EXPIRED!';
		return;
	}
	if (countdown) {
		var days = Math.floor(distance / _day);
		countdown.innerHTML = days + ' days ';
	}
}

timer = setInterval(showRemaining, 1000);

const DaysLeft = styled.div`
	font-size: 60px;
	font-family: 'Urbanist', sans-serif;
`;

const Text = styled.div`
	font-size: 30px;
	font-family: 'Urbanist', sans-serif;
	margin-left: 5px;
`;

const CounterContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5rem 0rem 5rem 0rem;
`;

const ImageContainer = styled.div`
	max-width: 70px;

	img {
		width: 100%;
	}
`;
export default function Counntdown() {
	return (
		<>
			<CounterContainer>
				<ImageContainer>
					<img src={butterfly} alt='butterfly' />
				</ImageContainer>
				<DaysLeft id='countdown' /> <Text>till the wedding</Text>
			</CounterContainer>
		</>
	);
}
