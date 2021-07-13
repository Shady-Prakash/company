/** @format */
import React, {Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Card from '../Cards/newsCard';
import Button from '../Button';
import {Link} from 'react-router-dom';
import RightArrow from '../../assets/uploads/Hero/XL/Button/Icon/Arrow/Right.svg';
import Image1 from '../../assets/uploads/Tiles/Tile/Tile1.jpg';
import Image2 from '../../assets/uploads/Tiles/Tile/Tile2.jpg';
import Image3 from '../../assets/uploads/Tiles/Tile/Tile3.jpg';
import Image4 from '../../assets/uploads/Tiles/Tile/Tile4.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const News = () => {
	const responsive = {
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
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
			<section className='latestNews'>
				{/* Desktop screen */}
				<Container>
					<Row className='d-xs-none d-xl-flex '>
						<Col>
							<div className='latestNews__left'>
								<Row>
									<Col className='pr-0 mt-5'>
										<h5 className='text-uppercase color-brand'>latest news</h5>
										<Card
											type='newsCard__lg'
											image={Image1}
											title='Molestie molesti metus, tempus in commodo, semper tellus'
											subtitle=''
											text=''
										/>
										<Link
											to='/'
											type='btn__secondary'
											text='See all news'></Link>
									</Col>
								</Row>
							</div>
						</Col>
						<Col>
							<div className='latestNews__right'>
								<Row>
									<Col className='pl-0'>
										<Card
											type='newsCard__md'
											image={Image2}
											title=''
											subtitle='Molestie molesti metus, tempus in commodo, semper tellus'
											text=''
										/>

										<Row>
											<Col sm={6} className='pr-0'>
												<Card
													type='newsCard__sm newsCard__sm--bl-0'
													image={Image3}
													title=''
													subtitle=''
													text='In faucibus suspendisse magna massa nibh elementum augue phasellus tristique senectus urna'
												/>
											</Col>
											<Col sm={6} className='pl-0'>
												<Card
													type='newsCard__sm'
													image={Image4}
													title=''
													subtitle=''
													text='In faucibus suspendisse magna massa nibh elementum augue phasellus tristique senectus urna'
												/>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>

				{/* Mobile screen */}
				<div className='slider latestNews-slider d-xl-none'>
					<h5 className='text-uppercase color-brand'>latest news</h5>
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
						containerClass='carousel-container d-xl-none'
						removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
						itemClass='carousel-item-padding-40-px'>
						<Card
							type='newsCard__lg'
							image={Image1}
							title=''
							subtitle='Molestie molesti metus, tempus in commodo, semper tellus'
							text=''
						/>
						<Card
							type='newsCard__lg'
							image={Image1}
							title=''
							subtitle='Molestie molesti metus, tempus in commodo, semper tellus'
							text=''
						/>
						<Card
							type='newsCard__lg'
							image={Image1}
							title=''
							subtitle='Molestie molesti metus, tempus in commodo, semper tellus'
							text=''
						/>
						<Card
							type='newsCard__lg'
							image={Image1}
							title=''
							subtitle='Molestie molesti metus, tempus in commodo, semper tellus'
							text=''
						/>
					</Carousel>
					<Button type='btn__secondary' text='See all news' />
				</div>
			</section>
		</Fragment>
	);
};

export default News;
