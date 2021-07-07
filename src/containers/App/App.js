/** @format */

import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import '../../assets/css/App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
