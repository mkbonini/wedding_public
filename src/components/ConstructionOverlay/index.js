/** @format */
import styled from 'styled-components';

export default function ConstructionOverlay({ page }) {
	const Overlay = styled.div`
		height: 100vh;
		width: 100%;
		background-color: floralwhite;
		opacity: 1;
		position: fixed;
	`;

	const OverlayCopy = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80vh;
		position: fixed;
		color: #cae36f;
		z-index: 30;
		width: 100%;
		p {
			text-align: center;
			font-size: 25px;
		}
	`;
	return (
		<>
			<OverlayCopy>
				<p>
					{page} <br />
					page under <br />
					construction
				</p>
			</OverlayCopy>
			<Overlay />
		</>
	);
}
