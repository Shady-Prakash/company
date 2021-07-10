/** @format */

import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import GalleryCard from './Cards/galleryCard';
import Gallery1 from '../assets/uploads/Gallery/Gallery1.jpg';
import Gallery2 from '../assets/uploads/Gallery/Gallery2.jpg';
import Gallery3 from '../assets/uploads/Gallery/Gallery3.jpg';

const Gallery = () => {
	return (
		<Fragment>
			<section className='gallery'>
				<Container>
					<Row className='gx-0 d-flex align-items-start'>
						<Col sm={4} className='align-self-center'>
							<Row className='gx-0'>
								<Col sm={12} className='mt-2 mb-5'>
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
			</section>
		</Fragment>
	);
};

export default Gallery;
