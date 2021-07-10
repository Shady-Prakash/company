/** @format */

import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Bene1 from '../assets/uploads/Bene/Promo/Card/Image.jpg';
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
			<section className='bene'>
				<Container>
					<h5 className='color-brand text-uppercase'>Beneficiaries</h5>
				</Container>
				<Container className='bene__slider'>
					<Slider {...settings}>
						<div>
							<BeneCard
								image={Bene1}
								text='Morbi magna turpis dolor adipiscing'
							/>
						</div>
						<div>
							<BeneCard
								image={Bene1}
								text='Curabitur cursus bibendum mauris placerat'
							/>
						</div>
						<div>
							<BeneCard image={Bene1} text='Sagittis quam nunc platea est' />
						</div>
						<div>
							<BeneCard image={Bene1} text='Nisi, sed dui, ac enim' />
						</div>
						<div>
							<BeneCard image={Bene1} text='Vitae sodales sit id ullamcorper' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
						<div>
							<BeneCard image={Bene1} text='' />
						</div>
					</Slider>
				</Container>
			</section>
		</Fragment>
	);
};

export default Beneficiaries;
