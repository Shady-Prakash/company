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
						<div class='p-3 border bg-light'>A</div>
					</Col>
					<Col sm={4}>
						<div class='p-3 border bg-light'>B</div>
					</Col>
					<Col sm={6} className='gy-5'>
						<div class='p-3 border bg-light'>C</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Home;
