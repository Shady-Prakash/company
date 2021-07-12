/** @format */
import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/uploads/Footer/logo-white.svg';
import SocialIcon from './SocialIcon';
import Nav from './Nav';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer'>
				<Container>
					<Row>
						<Col>
							<div className='footer-top border-bottom border-white'>
								<Row>
									<Col md={12}>
										<figure className='site-branding'>
											<Link to='/'>
												<img src={Logo} alt='site-branding...'></img>
											</Link>
										</figure>
									</Col>
								</Row>
							</div>
							<div className='footer-bottom'>
								<Row>
									<Col md={10} className='text-white'>
										<Nav />
									</Col>
									<Col md={2}>
										<SocialIcon />
									</Col>
								</Row>
							</div>
							<div className='footer-text'>
								<Row>
									<Col sm={6} className='text-white text-capitalize'>
										<span className='text-sm me-5'>
											<Link to='/'>Privacy policy</Link>
										</span>
										<span className='text-sm'>
											<Link to='/'>Terms & conditions</Link>
										</span>
									</Col>
									<Col sm={6} className='text-end text-white text-capitalize'>
										<span className='text-sm '>
											&copy; 2021 Company Name. All rights reserved.
										</span>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</Fragment>
	);
};

export default Footer;
