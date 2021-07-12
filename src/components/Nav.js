/** @format */

import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/uploads/logo-white.svg';
import Burger from '../assets/uploads/Nav/Burger.svg';
import Close from '../assets/uploads/Nav/Close.svg';
const Nav = () => {
	// Mobile menu
	const [isMobile, setIsMobile] = useState(false);
	return (
		<Fragment>
			<nav>
				{isMobile ? (
					<div className='nav-mobile'>
						<figure className='site-branding'>
							<img src={Logo} alt='site logo...'></img>
						</figure>
						<ul className='d-flex flex-column nav-mobile__links '>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Founders
								</Link>
								<ul className='nav-mobile__links-sub d-flex flex-column ps-5'>
									<li className='border-0'>
										<Link to='/' onClick={() => setIsMobile(false)}>
											Maria Kenter
										</Link>
									</li>
									<li className='border-0'>
										<Link to='/' onClick={() => setIsMobile(false)}>
											Roger Septimus
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Beneficiaries
								</Link>
							</li>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Scholarships
								</Link>
								<ul className='nav-mobile__links-sub d-flex flex-column ps-5'>
									<li className='border-0'>
										<Link to='/' onClick={() => setIsMobile(false)}>
											Sed ut tincidunt euismod malesuada
										</Link>
									</li>
									<li className='border-0'>
										<Link to='/' onClick={() => setIsMobile(false)}>
											Nunc, sit in varius pulvinar
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Press
								</Link>
							</li>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Blog
								</Link>
							</li>
							<li>
								<Link to='/' onClick={() => setIsMobile(false)}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<ul className='nav-links'>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Founders
							</Link>
						</li>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Beneficiaries
							</Link>
						</li>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Scholarships
							</Link>
						</li>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Press
							</Link>
						</li>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Blog
							</Link>
						</li>
						<li>
							<Link to='/' onClick={() => setIsMobile(false)}>
								Contact
							</Link>
						</li>
					</ul>
				)}
				<div className='nav-icon' onClick={() => setIsMobile(!isMobile)}>
					{isMobile ? (
						<Fragment>
							<img
								src={Close}
								alt='burger icon'
								className='nav-icon__close'></img>
						</Fragment>
					) : (
						<Fragment>
							<img src={Burger} alt='burger icon'></img>
						</Fragment>
					)}
				</div>
			</nav>
		</Fragment>
	);
};

export default Nav;
