/** @format */

import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home/Home';

import Footer from '../../components/Footer';
import '../../assets/css/App.css';
const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<main>
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</main>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default App;
