/** @format */

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcon from './SocialIcon';

const SocialIcons = () => {
	return (
		<Fragment>
			<section className='social__icons'>
				<Container>
					<Row>
						<Col sm={12}>
							<SocialIcon />
						</Col>
					</Row>
				</Container>
			</section>
		</Fragment>
	);
};

export default SocialIcons;
