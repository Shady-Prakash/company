/** @format */

import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<Link to='/'>Founders</Link>
					</li>
					<li>
						<Link to='/'>Beneficiaries</Link>
					</li>
					<li>
						<Link to='/'>Scholarships</Link>
					</li>
					<li>
						<Link to='/'>Press</Link>
					</li>
					<li>
						<Link to='/'>Blog</Link>
					</li>
					<li>
						<Link to='/'>Contact</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default Nav;
