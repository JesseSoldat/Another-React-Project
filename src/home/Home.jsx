import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import firebase from 'firebase';

class Home extends Component {

	componentWillMount(){

		firebase.auth().onAuthStateChanged(function(user){
				if(user){

				} else {
					browserHistory.push('/login');
				}
		})

	}

	render() {
		return (
			<div>Home</div>
			);
	}
}

export default Home;