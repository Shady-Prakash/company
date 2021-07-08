/** @format */
import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
	return (
		<Fragment>
			<Container className='overflow-hidden'>
				<Row>
					<Col sm={4}>
						<h1>Hi react</h1>
						<p>lorem lorem</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Home;
