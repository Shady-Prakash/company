/** @format */
import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../assets/uploads/Footer/logo-white.svg';
import SocialIcon from './SocialIcon';
import Nav from './Nav';
import TwitterImg from '../assets/uploads/Twitter-white.svg';
import LinkedinImg from '../assets/uploads/Vector-white.svg';

const Footer = () => {
	return (
		<Fragment>
			<footer className='footer'>
				<Container>
					<Row>
						<Col>
							<div className='footer-top'>
								<Row>
									<Col md={12}>
										<div className='footer-top__icon d-flex justify-content-between'>
											<figure className='site-branding'>
												<Link to='/'>
													<img src={Logo} alt='site-branding...'></img>
												</Link>
											</figure>
											<div className='d-xs-block d-xl-none'>
												<SocialIcon image1={TwitterImg} image2={LinkedinImg} />
											</div>
										</div>
									</Col>
								</Row>
							</div>
							<div className='footer-bottom'>
								<Row>
									<Col xs={10} md={10} className='text-white'>
										<ul className='footer-bottom__nav'>
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
									</Col>
									<Col md={2} className='d-none d-xs-none d-xl-block'>
										<SocialIcon image1={TwitterImg} image2={LinkedinImg} />
									</Col>
								</Row>
							</div>
							<div className='footer-text'>
								<Row>
									<Col
										xs={12}
										lg={6}
										className='text-white text-capitalize  mb-3 mb-xl-0 text-sm-center'>
										<span className='text-sm me-5'>
											<Link to='/'>Privacy policy</Link>
										</span>
										<span className='text-sm'>
											<Link to='/'>Terms & conditions</Link>
										</span>
									</Col>
									<Col
										xs={12}
										lg={6}
										className='text-center text-sm-center text-xl-end  text-white text-capitalize '>
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
