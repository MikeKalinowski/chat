import React from 'react';
import styled from 'styled-components'

const RegisterWrapper = styled.div`
	text-align: center
	padding-top: 10%;
`

const Title = styled.div`
	font-weight: 600;
	line-height: 46px;
	font-size: 30px;
`

const Text = styled.div`
	
`

const InputsWrapper = styled.div`
	
`



class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    name: "",
		    password: "",
		    errorRegistering: "no"
	    }
	}

	onNameChange = (event) => {
	  	this.setState({name: event.target.value})
	}

	onPasswordChange = (event) => {
	  	this.setState({password: event.target.value})
	}

	onRegister = () => {
		fetch('http://localhost:8000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			    name: this.state.name,
			    password: this.state.password,
			})
		})
		.then(res => res.json())
		.then(res => {
			if (res === "Existing") {
				this.setState({ errorRegistering: "Existing" })
			} else if (res === "User Added") {
				this.props.routeChanger("main")
			} else {
				this.setState({ errorRegistering: "Error" })
			}
		})
	}

	errorMessage = () => {
		if (this.state.errorRegistering === "Existing") {
			return (<div>User already exists</div>)
		} else if (this.state.errorRegistering === "Error") {
			return (<div>Error registering. Please try again later</div>)
		}
	}

	render() {
	  	return(
	  		<RegisterWrapper>
	  			<Title>Chatty Chat</Title>
	  			<Text>Welcome to Chatty Chat<br />Place where you chat to chat when you chat.</Text>
	  			<InputsWrapper>
	  				<fieldset>
	  					{this.errorMessage()}
	  					Name: <input type="text" placeholder="Name" onChange={this.onNameChange}/><br />
	  					Password: <input type="text" placeholder="Password" onChange={this.onPasswordChange}/><br />
	  				</fieldset>
	  			</InputsWrapper>
	  			<button onClick={this.onRegister}>Register</button>
	  			<div>
	  				{/* <button>Login as anonymous</button> */}
	  			</div>
	  		</RegisterWrapper>
	  	)
	}	
}

export default Register;