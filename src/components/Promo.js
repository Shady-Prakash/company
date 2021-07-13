/** @format */

import React from 'react';
import {Container} from 'react-bootstrap';
import Button from './Button';

const Promo = () => {
	return (
		<div className='promo'>
			<Container>
				<div className='promo__content d-flex justify-content-between flex-column '>
					<div className='promo__content--display-text mb-4 mb-xl-0'>
						<h1 className='color-brand'>
							Ullamcorper diam turpis egestas egestas fames enim risus sed proin
						</h1>
					</div>
					<div className='cta align-self-xl-end align-self-sm-start'>
						<Button type='btn__primary' text='Read more' />
					</div>
				</div>
			</Container>
			<div className='promo--img'></div>
		</div>
	);
};

export default Promo;
