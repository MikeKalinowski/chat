import React from 'react';
import styled from 'styled-components'

const LoginWrapper = styled.div`
	text-align: center
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

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    name: "",
		    password: "",
		    errorLogging: ""
	    }
	}

	onNameChange = (event) => {
	  	this.setState({name: event.target.value})
	}

	onPasswordChange = (event) => {
	  	this.setState({password: event.target.value})
	}

	onLogin = () => {
		if (!this.state.name || !this.state.password) {
			this.setState({ errorLogging: "empty" })
		} else {
			fetch('http://localhost:8000/login', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
				    name: this.state.name,
				    password: this.state.password,
				})
			})
			.then(res => res.json())
			.then(res => {
				if (res.name) {
					this.props.routeChanger("main")
				} else if (res === "No User") {
					this.setState({ errorLogging: "noUser" })
				} else {
					this.setState({ errorLogging: "error" })
				}
			})
		}
		
	}

	errorMessage = () => {
		if (this.state.errorLogging === "noUser") {
			return (<div>Incorrect user or password</div>)
		} else if (this.state.errorLogging === "error") {
			return (<div>Error logging in. Please try again later</div>)
		} else if (this.state.errorLogging === "empty") {
			return (<div>Please enter name and password</div>)
		}
	}

	render() {
	  	return(
	  		<LoginWrapper>
	  			<Title>Chatty Chat</Title>
	  			<Text>Welcome to Chatty Chat<br />Place where you chat to chat when you chat.</Text>
	  			<InputsWrapper>
	  				<fieldset>
	  					{this.errorMessage()}
	  					Name: <input type="text" placeholder="Name" onChange={this.onNameChange}/><br />
	  					Password: <input type="text" placeholder="Password" onChange={this.onPasswordChange}/><br />
	  				</fieldset>
	  			</InputsWrapper>
	  			<button onClick={this.onLogin}>Log in</button>
	  			<button onClick={() => this.props.routeChanger("register")}>Register</button>
	  			<div>
	  				{/* <button>Login as anonymous</button> */}
	  			</div>
	  		</LoginWrapper>
	  	)
	}	
}

export default Login;