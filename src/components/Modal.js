/** @format */

import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
	padding: 20px;
	height: 300px;
	max-width: 400px;
	width: 75%;
	border: 1px solid grey;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	z-index: 1;
	border-radius: 10px;
	box-shadow: 10px 7px 20px lightgray;
	h1 {
		font-size: 45px;
		color: black;
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		text-transform: uppercase;
	}
`;

export default function Modal({ setVisible, visible }) {
	const closeModal = () => {
		setVisible(false);
	};
	return visible ? (
		<ModalContainer>
			<h1>Modal</h1>
			<button onClick={closeModal}>Close</button>
		</ModalContainer>
	) : null;
}
