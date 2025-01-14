/** @format */
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const CardStyles = styled.div<{ disable: boolean }>`
	opacity: ${(p) => (p.disable ? '0.4' : '1')};
	pointer-events: ${(p) => p.disable && 'none'};
	max-width: 320px;
	padding: 1rem;
	margin: 1rem 0rem;
	width: 100%;
	border-radius: 4px;
	border-bottom: 1px solid whitesmoke;
	img {
		width: 100%;
	}
	:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
	@media only screen and (min-width: 900px) {
		max-width: 260px;
	}
`;
const ImageContainer = styled.div`
	position: relative;
`;
const Image = styled.div<{ image: string }>`
	background-image: url(${(p) => p.image && p.image});
	height: 230px;
	width: 230px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 10px;
	padding: 1rem;
`;

const Title = styled.div`
	padding: 1rem 1rem 0rem 1rem;
	h1 {
		font-size: 17px;
	}
	p.spots-remaining {
		font-size: 14px;
	}
	span.number {
		font-family: 'Circular-Medium';
	}
`;

const TypeLabel = styled.div<{ type: string }>`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: ${(p) =>
		p.type === 'family' ? '#E6EAFE' : p.type === 'rv' ? '#6871E4' : '#3366FF'};
	color: ${(p) => (p.type === 'family' ? '#3366FF' : 'white')};
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
	top: 10px;
	left: 10px;
`;

const ViewMoreLink = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1rem 2rem 1rem 1rem;
	align-items: center;
	gap: 10px;
	font-size: 14px;

	:hover {
		cursor: pointer;
		color: #3378cf;
	}
`;

export default function Card({
	image,
	name,
	type,
	remaining,
	onClick,
	disable = false,
	occupants,
}) {
	const dummyImage =
		'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';

	const rvOccupied = occupants.some((guest) => guest !== 'Spot Available');
	return (
		<CardStyles onClick={() => onClick()} disable={disable}>
			<div>
				<ImageContainer>
					<TypeLabel type={type}>{type}</TypeLabel>
					<Image image={image ? image : dummyImage} />
				</ImageContainer>
				<Title>
					<h1>{name}</h1>
					{type === 'rv' ? (
						rvOccupied ? (
							<p className='spots-remaining'>This site is occupied.</p>
						) : (
							<p className='spots-remaining'>
								This site is vacant and allows for a party up to{' '}
								<span>
									<span className='number'>{remaining}</span>
								</span>
							</p>
						)
					) : (
						<p className='spots-remaining'>
							There are{' '}
							<span>
								<span className='number'>{remaining}</span>
							</span>{' '}
							spots remaining
						</p>
					)}
				</Title>
			</div>
			<div>
				<ViewMoreLink>
					View More <FaArrowRight />
				</ViewMoreLink>
			</div>
		</CardStyles>
	);
}
