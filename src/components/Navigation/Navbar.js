/** @format */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { debounce } from '../../utils/index';

const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #ffffff;
	border-bottom: 0.5px solid #000000;
	h3 {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		font-family: 'Baloo 2';
		text-align: center;
		font-weight: 300;
		font-size: 25px;
		color: #000000;
		padding: 0px 20px;
		margin-left: ${(p) => (!p.admin ? '0px' : '-65px')};
	}
`;

const NavAccent = styled.div`
	background: rgb(51, 102, 255);
	background: linear-gradient(
		90deg,
		rgba(51, 102, 255, 1) 0%,
		rgba(255, 153, 255, 1) 100%,
		rgba(230, 234, 254, 1) 100%
	);
	height: 10px;
	width: 100%;
`;

const MainNav = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	z-index: 10000;
	top: ${(p) => (p.scrollVisible ? '0' : '-70px;')};
	transition: top 0.6s;
`;
const MenuLink = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		a {
			color: #3366ff;
			font-weight: 700;
		}
	}
	a {
		text-decoration: none;
		color: #000000;
		font-family: 'Baloo 2';
	}
	&#rsvp-link {
		width: 80px;
		height: 30px;
		background-color: #3366ff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		margin-right: 15px;
		position: relative;
		top: 0;
		transition: top ease 0.5s;
		&:hover {
			cursor: pointer;
			top: -5px;
		}
		a {
			color: #ffffff;
		}
	}
`;

const GroupedLinks = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 80px;
`;

export default function Navbar() {
	const history = useHistory();

	//Nav Heading Visible State
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [scrollVisible, setScrollVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;
		setScrollVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 70) ||
				currentScrollPos < 10
		);
		setPrevScrollPos(currentScrollPos);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll, prevScrollPos, scrollVisible]);

	return (
		<MainNav scrollVisible={scrollVisible}>
			<LinkContainer>
				<GroupedLinks>
					<h3 onClick={() => history.push('/')}>M + M</h3>
					<MenuLink>
						<Link to='/'>
							<p>home</p>
						</Link>
					</MenuLink>
					<MenuLink>
						<Link to='/schedule'>
							<p>schedule</p>
						</Link>
					</MenuLink>
					<MenuLink>
						<Link to='/lodging'>
							<p>lodging</p>
						</Link>
					</MenuLink>
					<MenuLink>
						<Link to='/faq'>
							<p>faq</p>
						</Link>
					</MenuLink>
					<MenuLink>
						<Link to='/registry'>
							<p>registry</p>
						</Link>
					</MenuLink>
				</GroupedLinks>
				<MenuLink id='rsvp-link'>
					<Link to='/rsvp'>
						<p>RSVP</p>
					</Link>
				</MenuLink>
			</LinkContainer>
			<NavAccent />
		</MainNav>
	);
}
