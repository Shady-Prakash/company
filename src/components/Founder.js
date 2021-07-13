/** @format */

import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Founder1 from '../assets/uploads/Founders/Image.jpg';
import Founder2 from '../assets/uploads/Image.jpg';
import RightArrow from '../assets/uploads/Hero/XL/Button/Icon/Arrow/Right-white.svg';

const Founder = () => {
	const [founder, setFounder] = useState(Founder1);

	return (
		<Fragment>
			<section className='founder' id='section-1'>
				<Container>
					<Row>
						<Col sm={12} md={12}>
							<h5 className='text-uppercase text-white'>The founders</h5>
						</Col>
						<Col sm={12} className='d-xl-none'>
							<div className='founder-content'>
								<figure className='mb-3'>
									<img src={founder} alt='founder image...'></img>
								</figure>
								<div className='founder-content--name'>
									<h2 className='text-white'>
										<Link to='/'>
											Maria Kenter&nbsp;&nbsp;{' '}
											<img src={RightArrow} alt='right arrow'></img>
										</Link>
									</h2>
								</div>
							</div>
							<div className='founder-content'>
								<figure>
									<img src={Founder2} alt='founder image...'></img>
								</figure>
								<div className='founder-content--name'>
									<h2 className='text-white'>
										<Link to='/'>
											Maria Kenter&nbsp;&nbsp;{' '}
											<img src={RightArrow} alt='right arrow'></img>
										</Link>
									</h2>
								</div>
							</div>
						</Col>
					</Row>
				</Container>

				<div className='founder__bg d-none d-xl-block'>
					<figure>
						<img src={founder} alt='founder image...'></img>
					</figure>

					<div className='founder__bg--content '>
						<ul>
							<li>
								<h2 className='text-white' onClick={() => setFounder(Founder1)}>
									Maria Kenter
								</h2>
							</li>
							<li>
								<h2 className='text-white' onClick={() => setFounder(Founder2)}>
									Roger Septimus
								</h2>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Founder;
