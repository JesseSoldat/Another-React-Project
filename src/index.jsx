import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import firebase from 'firebase';
import fireConfig from './firebaseConfig.js';

import Layout from './home/Layout.jsx';
import Home from './home/Home.jsx';

import Register from './login/Register.jsx';
import Login from './login/Login.jsx';

firebase.initializeApp(fireConfig);


render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Home}/>
			<Route path="/register" component={Register}/>
			<Route path="/login" component={Login}/>
		</Route>

	</Router>,
	document.getElementById('container')
	);

