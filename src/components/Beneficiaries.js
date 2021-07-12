/** @format */

import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Bene1 from '../assets/uploads/Bene/Promo/Card/Bene1.jpg';
import Bene2 from '../assets/uploads/Bene/Promo/Card/Bene2.jpg';
import Bene3 from '../assets/uploads/Bene/Promo/Card/Bene3.jpg';
import Bene4 from '../assets/uploads/Bene/Promo/Card/Bene4.jpg';
import Bene5 from '../assets/uploads/Bene/Promo/Card/Bene4.jpg';

import BeneCard from './Cards/BeneCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Beneficiaries = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Fragment>
			<section className='bene' id='beneficiaries'>
				<Container>
					<h5 className='color-brand text-uppercase'>Beneficiaries</h5>
				</Container>
				<Container className='bene__slider'>
					<Slider {...settings}>
						<BeneCard
							image={Bene1}
							text='Morbi magna turpis dolor adipiscing'
						/>
						<BeneCard
							image={Bene2}
							text='Curabitur cursus bibendum mauris placerat'
						/>
						<BeneCard image={Bene3} text='Sagittis quam nunc platea est' />
						<BeneCard image={Bene4} text='Nisi, sed dui, ac enim' />
						<BeneCard image={Bene5} text='Vitae sodales sit id ullamcorper' />
					</Slider>
				</Container>
			</section>
		</Fragment>
	);
};

export default Beneficiaries;
