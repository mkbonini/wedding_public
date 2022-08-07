/** @format */

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BreadcrumbContainer = styled.div`
	display: flex;
	width: 100%;
	padding-top: 4rem;
	max-width: 1000px;
	span {
		color: lightgray;
		&.location-breadcrumb {
			font-weight: bold;
			color: darkseagreen;
		}
		&.home-breadcrumb {
			cursor: pointer;
			@media only screen and (max-width: 1000px) {
				margin-left: 2rem;
			}
		}
	}
	@media only screen and (max-width: 1000px) {
		padding: 2rem 0rem 1rem 0rem;
	}
`;

export default function Button({ location }) {
	const history = useHistory();
	return (
		<BreadcrumbContainer>
			<span className='home-breadcrumb' onClick={() => history.push('/')}>
				home
			</span>
			<span>&nbsp;/&nbsp;</span>
			<span className='location-breadcrumb'>{location}</span>
		</BreadcrumbContainer>
	);
}
