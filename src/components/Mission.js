/** @format */
import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';

const Mission = () => {
	return (
		<Fragment>
			<section className='mission promo'>
				<Container>
					<div className='mission__content'>
						<h5 className='text-uppercase text-white'>our mission</h5>
						<h2 className='text-white'>
							Imperdiet quis leo scelerisque nunc magna mattis vitae non non
						</h2>
						<p className='text-white'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation.
						</p>
					</div>
				</Container>
				<div className='promo--img promo--img__mission'></div>
			</section>
		</Fragment>
	);
};

export default Mission;
