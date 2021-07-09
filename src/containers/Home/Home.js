/** @format */
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcons from '../../components/SocialIcons';
import Header from '../../components/Header';
import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
const Home = () => {
	return (
		<Fragment>
			<SocialIcons />
			<Header />
			<Hero />
			<News />
		</Fragment>
	);
};

export default Home;
