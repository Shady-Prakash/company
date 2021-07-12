/** @format */

import React, {Fragment, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Founder1 from '../assets/uploads/Founders/Image.jpg';
import Founder2 from '../assets/uploads/Image.jpg';
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
					</Row>
				</Container>
				<div className='founder__bg'>
					<figure>
						<img src={founder} alt='founder image...'></img>
					</figure>
					<div className='founder__bg--content'>
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
