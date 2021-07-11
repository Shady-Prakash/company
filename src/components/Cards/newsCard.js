/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

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
						<h2>
							<Link to='/'>{title ? title : ''}</Link>
						</h2>
						<h3>
							<Link to='/'>{subtitle ? subtitle : ''}</Link>
						</h3>
						<p>
							<Link to='/'>{text ? text : ''}</Link>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
