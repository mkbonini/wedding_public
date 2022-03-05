/** @format */

import React from 'react';
import styled from 'styled-components';

const Dots = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	.dot-falling {
		position: relative;
		left: -9999px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: rgba(78, 154, 152, 1);
		color: rgba(78, 154, 152, 1);
		box-shadow: 9999px 0 0 0 rgba(78, 154, 152, 1);
		animation: dotFalling 1s infinite linear;
		animation-delay: 0.1s;
	}

	.dot-falling::before,
	.dot-falling::after {
		content: '';
		display: inline-block;
		position: absolute;
		top: 0;
	}

	.dot-falling::before {
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: rgba(78, 154, 152, 1);
		color: rgba(78, 154, 152, 1);
		animation: dotFallingBefore 1s infinite linear;
		animation-delay: 0s;
	}

	.dot-falling::after {
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: rgba(78, 154, 152, 1);
		color: rgba(78, 154, 152, 1);
		animation: dotFallingAfter 1s infinite linear;
		animation-delay: 0.2s;
	}

	@keyframes dotFalling {
		0% {
			box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
		}
		25%,
		50%,
		75% {
			box-shadow: 9999px 0 0 0 rgba(78, 154, 152, 1);
		}
		100% {
			box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
		}
	}

	@keyframes dotFallingBefore {
		0% {
			box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
		}
		25%,
		50%,
		75% {
			box-shadow: 9984px 0 0 0 rgba(78, 154, 152, 1);
		}
		100% {
			box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
		}
	}

	@keyframes dotFallingAfter {
		0% {
			box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
		}
		25%,
		50%,
		75% {
			box-shadow: 10014px 0 0 0 rgba(78, 154, 152, 1);
		}
		100% {
			box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
		}
	}
`;

export default function Loading() {
	return (
		<>
			<Dots>
				<div className='dot-falling'></div>
			</Dots>
		</>
	);
}
