import React from 'react';
import styled from 'styled-components'
import { Button, Divider, Form, Grid, Segment, Header, Message } from 'semantic-ui-react'

const LoginWrapper = styled.div`
	text-align: center;
	width: 600px;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const Text = styled.div`
	margin-bottom: 25px;
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
	  			<Header as='h1'>Chatty Chat</Header>
	  			<Text>Welcome to Chatty Chat<br />It's a simple chat app made to practise back-end stack. <br /> You can register a new user (no e-mail required) or simply sign up with login: anon, pass: anon</Text>
	  			<Segment placeholder>
	  			    <Grid columns={2} relaxed='very' stackable>
	  			      	<Grid.Column>
	  			        	<Form error>
	  			        		<Message
	  			        		    error
	  			        		    content={this.errorMessage()}
	  			        		/>
	  			          		<Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' onChange={this.onNameChange} />
	  			          		<Form.Input icon='lock' iconPosition='left' label='Password' type='password' onChange={this.onPasswordChange} />
	  			          		<Button content='Login' primary onClick={this.onLogin} />
	  			        	</Form>
	  			      	</Grid.Column>
	  			      	<Grid.Column verticalAlign='middle'>
	  			        	<Button content='Sign up' icon='signup' size='big' onClick={() => this.props.routeChanger("register")} />
	  			      	</Grid.Column>
	  			    </Grid>
	  			    <Divider vertical>Or</Divider>
	  			</Segment>
	  		</LoginWrapper>
	  	)
	}	
}

export default Login;