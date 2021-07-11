/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const galleryCard = ({image, text}) => {
	return (
		<Fragment>
			<div className='galleryCard'>
				<figure className='galleryCard__img-holder mb-2'>
					<img src={image} alt='gallery card image...'></img>
				</figure>
				<div className='galleryCard__body'>
					<p className='text-sm'>
						<Link to='/'>{text}</Link>
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default galleryCard;
