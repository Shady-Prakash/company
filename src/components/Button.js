/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import RightArrow from '../assets/uploads/Hero/XL/Button/Icon/Arrow/Right.svg';

const Button = () => {
	return (
		<Fragment>
			<Link to='/'>
				<button className='btn btn__primary'>
					Read more
					<img src={RightArrow} alt='right arrow'></img>
				</button>
			</Link>
		</Fragment>
	);
};

export default Button;
