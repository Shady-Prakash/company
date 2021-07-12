/** @format */

import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcons from './SocialIcons';
import Logo from '../assets/uploads/Nav/Default/logo.svg';
import Nav from './Nav';

const Header = () => {
	//Sticky header on scroll
	const [scrolled, setScrolled] = useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 100) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});
	let navbarClasses = ['header'];
	if (scrolled) {
		navbarClasses.push('scrolled');
	}

	return (
		<Fragment>
			<SocialIcons />
			<header className={navbarClasses.join(' ')}>
				<Container>
					<div className='header__mast d-flex justify-content-between align-items-center'>
						<div className='site-branding'>
							<Link to='/'>
								<figure>
									<img src={Logo} alt='site-branding...'></img>
								</figure>
							</Link>
						</div>
						<Nav />
					</div>
				</Container>
			</header>
		</Fragment>
	);
};

export default Header;
