/** @format */

import React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import TwitterImg from '../assets/uploads/Twitter.svg';
import LinkedinImg from '../assets/uploads/Vector.svg';

const SocialIcon = () => {
	return (
		<Fragment>
			<div className='social__icon'>
				<ul className='list-unstyled d-flex '>
					<li>
						<Link to='/' target='_blank' rel='noopener noreferrer'>
							<img src={TwitterImg} alt='twitter Icon...'></img>
						</Link>
					</li>
					<li>
						<Link to='/' target='_blank' rel='noopener noreferrer'>
							<img src={LinkedinImg} alt='Linkedin Icon...'></img>
						</Link>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};

export default SocialIcon;
