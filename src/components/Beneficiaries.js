/** @format */

import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Bene1 from '../assets/uploads/Bene/Promo/Card/Bene1.jpg';
import Bene2 from '../assets/uploads/Bene/Promo/Card/Bene2.jpg';
import Bene3 from '../assets/uploads/Bene/Promo/Card/Bene3.jpg';
import Bene4 from '../assets/uploads/Bene/Promo/Card/Bene4.jpg';
import Bene5 from '../assets/uploads/Bene/Promo/Card/Bene4.jpg';

import BeneCard from './Cards/BeneCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Beneficiaries = () => {
	const responsive = {
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
			slidesToSlide: 1,
			partialVisibilityGutter: 60, // optional, default to 1.
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
			slidesToSlide: 1,
			partialVisibilityGutter: 40, // optional, default to 1.
		},
		mobile: {
			breakpoint: {max: 464, min: 0},
			items: 1,
			slidesToSlide: 1,
			partialVisibilityGutter: 60, // optional, default to 1.
		},
	};

	return (
		<Fragment>
			<section className='bene' id='beneficiaries'>
				<div className='slider bene-slider'>
					<h5 className='color-brand text-uppercase'>Beneficiaries</h5>
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={responsive}
						infinite={true}
						autoPlaySpeed={1000}
						partialVisible
						keyBoardControl={true}
						dotListClass=''
						customTransition='all .5'
						transitionDuration={500}
						containerClass='carousel-container'
						removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
						itemClass='carousel-item-padding-40-px'>
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
					</Carousel>
				</div>
			</section>
		</Fragment>
	);
};

export default Beneficiaries;
