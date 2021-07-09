/** @format */

import React, {Fragment} from 'react';
const Card = ({type, image, title, subtitle, text}) => {
	return (
		<Fragment>
			<div className={`newsCard ${type}`}>
				<figure>
					<img src={image} alt='card image'></img>
				</figure>
				<div className='newsCard__body'>
					<div className='meta'>
						<h6 className='d-flex align-items-center text-uppercase'>
							november 19&nbsp;<span className='meta__dash'></span> &nbsp;2020
						</h6>
					</div>
					<div className='newsCard__title'>
						<h2>{title ? title : ''}</h2>
						<h3>{subtitle ? subtitle : ''}</h3>
						<p>{text ? text : ''}</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
