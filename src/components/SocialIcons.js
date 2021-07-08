/** @format */

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import TwitterImg from '../assets/uploads/Twitter.svg';
import LinkedinImg from '../assets/uploads/Vector.svg';

const SocialIcons = () => {
	return (
		<Fragment>
			<section className='social__icons'>
				<Container>
					<Row>
						<Col sm={12}>
							<ul className='list-unstyled d-flex '>
								<li>
									<Link to='/'>
										<img src={TwitterImg} alt='Faceboook Icon...'></img>
									</Link>
								</li>
								<li>
									<Link to='/'>
										<img src={LinkedinImg} alt='Faceboook Icon...'></img>
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default SocialIcons;
