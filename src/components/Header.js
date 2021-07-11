/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcons from './SocialIcons';
import Logo from '../assets/uploads/Nav/Default/logo.svg';
import Nav from './Nav';

const Header = () => {
	return (
		<Fragment>
			<SocialIcons />
			<header>
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
