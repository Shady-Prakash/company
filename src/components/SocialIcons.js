/** @format */

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcon from './SocialIcon';
import TwitterImg from '../assets/uploads/Twitter.svg';
import LinkedinImg from '../assets/uploads/Vector.svg';

const SocialIcons = () => {
	return (
		<Fragment>
			<section className='social__icons'>
				<Container>
					<Row className='g-5'>
						<Col sm={12}>
							<SocialIcon image1={TwitterImg} image2={LinkedinImg} />
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default SocialIcons;
