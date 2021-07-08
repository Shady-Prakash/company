/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from '../assets/uploads/Nav/Default/logo.svg';
const Header = () => {
	return (
		<Fragment>
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

						<nav>
							<ul>
								<li>
									<Link to='/'>Founders</Link>
								</li>
								<li>
									<Link to='/'>Beneficiaries</Link>
								</li>
								<li>
									<Link to='/'>Scholarships</Link>
								</li>
								<li>
									<Link to='/'>Press</Link>
								</li>
								<li>
									<Link to='/'>Blog</Link>
								</li>
								<li>
									<Link to='/'>Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
				</Container>
			</header>
		</Fragment>
	);
};

export default Header;
