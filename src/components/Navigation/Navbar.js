/** @format */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
	MainNav,
	MobileMenu,
	LinkContainer,
	GroupedLinks,
	Title,
	MenuLink,
	NavAccent,
	HamburgerContainer,
} from './styled-components';
import ButtonSmall from '../ButtonSmall';

export default function Navbar({ setFlyoutVisible, flyoutVisible }) {
	const history = useHistory();

	//Nav Heading Visible State
	const [scrollVisible, setScrollVisible] = useState(true);

	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<MainNav
			scrollVisible={scrollVisible}
			flyoutVisible={flyoutVisible}
			id='main-nav'
		>
			<MobileMenu>
				<div className='flex'>
					<HamburgerContainer onClick={() => setFlyoutVisible(!flyoutVisible)}>
						<div className='bar' />
						<div className='bar' /> <div className='bar' />
						<div className='bar' />
					</HamburgerContainer>
					<Title onClick={() => history.push('/')}>M + M</Title>
					<ButtonSmall text='RSVP' onClick={() => history.push('/rsvp')} />
				</div>
			</MobileMenu>
			<LinkContainer>
				<GroupedLinks>
					<Title onClick={() => history.push('/')}>M + M</Title>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/our-story'>
							<p>our story</p>
						</Link>
					</MenuLink>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/schedule'>
							<p>schedule</p>
						</Link>
					</MenuLink>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/lodging'>
							<p>lodging</p>
						</Link>
					</MenuLink>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/travel'>
							<p>travel</p>
						</Link>
					</MenuLink>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/registry'>
							<p>registry</p>
						</Link>
					</MenuLink>
					<MenuLink onClick={() => handleClick()}>
						<Link to='/faq'>
							<p>faq</p>
						</Link>
					</MenuLink>
				</GroupedLinks>
				<MenuLink className='desktop'>
					<ButtonSmall text='RSVP' onClick={() => history.push('/rsvp')} />
				</MenuLink>
			</LinkContainer>
			<NavAccent />
		</MainNav>
	);
}
