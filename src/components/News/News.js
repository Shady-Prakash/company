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

const News = () => {
	return (
		<Fragment>
			<section className='latestNews'>
				<Container>
					<Row>
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
										<Button type='btn__secondary' text='See all news' />
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

					{/* <div className='latestNews__container'>
						<div className='latestNews__container--item'>
							<div>
								<h5 className='text-uppercase color-brand'>latest news</h5>
							</div>
						</div>
						<div className='latestNews__container--item'>
							<Card />
						</div>
						<div className='latestNews__container--item'>
							<Card />
						</div>
						<div className='latestNews__container--item'>
							<Card />
						</div>
						<div className='latestNews__container--item'>
							<Card />
						</div>
						<div className='latestNews__container--item'>
							<Button type='btn__secondary' text='See all news' />
						</div>
					</div> */}
				</Container>
			</section>
		</Fragment>
	);
};

export default News;
