import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import firebase from 'firebase';


class Register extends Component {

	constructor(props){
		super(props)

		this.state = {
			email: '',
			pass: ''
		}

	}


	render(){
		return(
		<div>
			<h3>Register</h3>
			<form>
				<input type="text"
						placeholder="Email"
						
						/>
			</form>

		</div>
			);
	}
}
export default Register;