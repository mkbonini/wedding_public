/** @format */

import React from 'react';
import {
	NameContainer,
	LodgeNumberIcon,
	Name,
	ModalContainer,
	Close,
	ModalContent,
	Content,
	ImageContainer,
	ContentWidth,
	SignupContainer,
} from './styled-components';
import Form from './Form';
import close from '../../assets/cancel.png';

type ModalProps = {
	setVisible: any;
	visible: boolean;
	data: any;
	cabinClicked: string;
};

const lodgeSignup = (capacity: number, color: string) => {
	return [...Array(capacity)].map((e, i) => (
		<NameContainer color={color}>
			<LodgeNumberIcon color={color}>{i + 1}</LodgeNumberIcon>
			<Name>Spot Available</Name>
		</NameContainer>
	));
};

export default function Modal({
	visible,
	data,
	cabinClicked,
	setVisible,
}: ModalProps) {
	const modalInfo = () => {
		return data.map((lodge: any) => {
			if (lodge.id === cabinClicked && visible) {
				return (
					<ModalContainer>
						<Close onClick={() => setVisible(false)} color={lodge.color}>
							<img src={close} alt='close button' />
						</Close>
						<ModalContent>
							<Content>
								<ImageContainer>
									<img src={lodge.cabinImage} alt='' />
								</ImageContainer>
								<ContentWidth className='content-width'>
									<h1>{lodge.name}</h1>
									<p>{lodge.description}</p>
									<span>
										See photos of cabin{' '}
										<a href={lodge.link} target='_blank'>
											here
										</a>
									</span>
									<h3>
										{lodge.capacity === 1
											? 'spot available'
											: 'spots available'}
									</h3>
									<SignupContainer>
										{lodgeSignup(lodge.capacity, lodge.color)}
									</SignupContainer>
								</ContentWidth>
							</Content>
							<ContentWidth>
								<Form lodge={lodge} />
							</ContentWidth>
						</ModalContent>
					</ModalContainer>
				);
			}
		});
	};
	return modalInfo();
}
