/** @format */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { debounce } from '../../utils/index';
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
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [scrollVisible, setScrollVisible] = useState(true);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.pageYOffset;
		setScrollVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 50) ||
				currentScrollPos < 10
		);
		setPrevScrollPos(currentScrollPos);
	}, 50);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll, prevScrollPos, scrollVisible]);

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
					<MenuLink>
						<Link to='/our-story'>
							<p>our story</p>
						</Link>
					</MenuLink>
					<MenuLink>
						<Link to='/details'>
							<p>details</p>
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
					<MenuLink>
						<Link to='/map'>
							<p>map</p>
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
