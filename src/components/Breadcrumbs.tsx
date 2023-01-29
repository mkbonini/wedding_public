/** @format */
import styled from 'styled-components';

const Container = styled.div`
	padding-left: 1rem;
	max-width: 1100px;
	font-family: 'Circular-Light';
	align-self: flex-start;
	&#our-story,
	&#schedule,
	&#faq {
		padding-left: unset;
	}
	.current {
		font-weight: 700;
		font-family: 'Circular-Medium';
		padding-left: 5px;
	}
`;
export default function Breadcrumbs({ page, id }) {
	return (
		<Container id={id}>
			<span>home / </span> <span className='current'> {page}</span>
		</Container>
	);
}
