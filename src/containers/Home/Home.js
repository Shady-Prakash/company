/** @format */
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

import Hero from '../../components/Hero/Hero';
import News from '../../components/News/News';
import Mission from '../../components/Mission';
import Beneficiaries from '../../components/Beneficiaries';
import Founder from '../../components/Founder';
import Gallery from '../../components/Gallery';

const Home = () => {
	return (
		<Fragment>
			<Hero />
			<News />
			<Mission />
			<Beneficiaries />
			<Founder />
			<Gallery />
		</Fragment>
	);
};

export default Home;
