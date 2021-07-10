/** @format */

import React, {Fragment} from 'react';

const BeneCard = ({image, text}) => {
	return (
		<Fragment>
			<div className='beneCard'>
				<figure>
					<img src={image} alt='beneficiery image...'></img>
				</figure>
				<div className='beneCard__body'>
					<p>{text}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default BeneCard;
