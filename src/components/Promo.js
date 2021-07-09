/** @format */

import React from 'react';
import {Container} from 'react-bootstrap';
import Button from './Button';

const Promo = () => {
	return (
		<div className='promo'>
			<Container>
				<div className='promo__content d-flex justify-content-between'>
					<div className='promo__content--display-text'>
						<h1 className='color-brand'>
							Ullamcorper diam turpis egestas egestas fames enim risus sed proin
						</h1>
					</div>
					<div className='cta align-self-end'>
						<Button />
					</div>
				</div>
			</Container>
			<div className='promo--img'></div>
		</div>
	);
};

export default Promo;
