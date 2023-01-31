/** @format */
import styled from 'styled-components';

const Container = styled.div`
	padding: 0rem 1rem;

	max-width: 1100px;
	width: 100%;
	font-family: 'Circular-Light';
	.current {
		font-weight: 700;
		font-family: 'Circular-Medium';
		padding-left: 5px;
	}
`;
export default function Breadcrumbs({ page }) {
	return (
		<Container>
			<span>home / </span> <span className='current'> {page}</span>
		</Container>
	);
}
