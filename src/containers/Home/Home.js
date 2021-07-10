/** @format */
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcons from '../../components/SocialIcons';
import Header from '../../components/Header';
import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Mission from '../../components/Mission';
import Beneficiaries from '../../components/Beneficiaries';
import Founder from '../../components/Founder';

const Home = () => {
	return (
		<Fragment>
			<SocialIcons />
			<Header />
			<Hero />
			<News />
			<Mission />
			<Beneficiaries />
			<Founder />
		</Fragment>
	);
};

export default Home;
