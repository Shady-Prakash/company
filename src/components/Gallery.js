/** @format */

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GalleryCard from './Cards/galleryCard';
import Gallery1 from '../assets/uploads/Gallery/Gallery1.jpg';
import Gallery2 from '../assets/uploads/Gallery/Gallery2.jpg';
import Gallery3 from '../assets/uploads/Gallery/Gallery3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Gallery = () => {
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
			slidesToSlide: 1, // optional, default to 1.
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
			<section className='gallery'>
				<Container>
					<Row className='gx-0 d-flex align-items-start d-none d-xl-flex'>
						<Col sm={4} className='align-self-center'>
							<Row className='gx-0'>
								<Col sm={12} className='mt-0 mb-3 mt-md-2 mb-md-5'>
									<h5 className='text-uppercase color-brand'>Gallery</h5>
								</Col>
								<Col sm={12} className='border border-end-0'>
									<GalleryCard
										image={Gallery1}
										text='Caption lorem ipsum dolor sit amet'
									/>
								</Col>
							</Row>
						</Col>

						<Col sm={4} className='border'>
							<GalleryCard
								image={Gallery2}
								text='Caption lorem ipsum dolor sit amet'
							/>
						</Col>
						<Col sm={4} className='border border-start-0'>
							<GalleryCard
								image={Gallery3}
								text='Caption lorem ipsum dolor sit amet'
							/>
						</Col>
					</Row>
				</Container>
				{/* // Mobile screen */}
				<div className='slider gallery-slider d-xl-none'>
					<h5 className='color-brand text-uppercase'>Gallery</h5>
					<Carousel
						swipeable={true}
						draggable={false}
						showDots={false}
						responsive={responsive}
						infinite={true}
						autoPlaySpeed={1000}
						partialVisible
						keyBoardControl={true}
						dotListClass=''
						containerClass='carousel-container '
						removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
						itemClass='carousel-item-padding-0-px'>
						<GalleryCard
							image={Gallery1}
							text='Caption lorem ipsum dolor sit amet'
						/>
						<GalleryCard
							image={Gallery2}
							text='Caption lorem ipsum dolor sit amet'
						/>
						<GalleryCard
							image={Gallery3}
							text='Caption lorem ipsum dolor sit amet'
						/>
					</Carousel>
				</div>
			</section>
		</Fragment>
	);
};

export default Gallery;
