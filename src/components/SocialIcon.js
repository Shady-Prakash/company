/** @format */

import React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';

const SocialIcon = ({image1, image2}) => {
	return (
		<Fragment>
			<div className='social__icon'>
				<ul className='list-unstyled d-flex '>
					<li>
						<Link to='/' target='_blank' rel='noopener noreferrer'>
							<img src={image1} alt='twitter Icon...'></img>
						</Link>
					</li>
					<li>
						<Link to='/' target='_blank' rel='noopener noreferrer'>
							<img src={image2} alt='Linkedin Icon...'></img>
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default SocialIcon;
