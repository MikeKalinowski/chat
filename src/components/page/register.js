import React from 'react';
import styled from 'styled-components'

import { Container, Button, Form, Segment, Header, Message } from 'semantic-ui-react'

const StyledContainer = styled(Container)`
	&&& {
		text-align: center;
		margin-top: 15vh
		max-width: 400px!important;

		@media (max-width: 767px) {
		  margin-top: 40px
		}
	}
`

const Link = styled.a`
	display: block;
	padding-top: 10px;
	text-decoration: underline;
	cursor: pointer;
	color: inherit;
`

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		    name: "",
		    password: "",
		    errorRegistering: "no",
		    buttonLoading: false
	    }
	}

	onNameChange = (event) => {
	  	this.setState({name: event.target.value});
	}

	onPasswordChange = (event) => {
	  	this.setState({password: event.target.value});
	}

	onRegister = () => {
		if (!this.state.name || !this.state.password) {
			this.setState({ errorRegistering: "Empty" });
		} else {
			this.setState({ buttonLoading: true });
			fetch("https://chattychat777.herokuapp.com/register", {
				method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
				    name: this.state.name,
				    password: this.state.password,
				})
			})
			.then(res => res.json())
			.then(res => {
				this.setState({ buttonLoading: false });
				return res;
			})
			.then(res => {
				if (res.id) {
					this.props.saveUserData({
						id: res.id,
						name: this.state.name
					});
					this.props.changeRoute("main");
				} else if (res === "Existing") {
					this.setState({ errorRegistering: "Existing" });
				} else {
					this.setState({ errorRegistering: "Error" });
				}
			})
		}
	}

	setErrorMessage = () => {
		switch (this.state.errorRegistering) {
		  	case "Existing":
			    return (<div>User already exists</div>);
			case "Error":
			    return (<div>Error registering. Please try again later</div>);
			case "Empty":
			    return (<div>Please enter name and password</div>);
			default:
				break;
		}
	}

	render() {
	  	return(
	  		<StyledContainer>
	  			<Header as="h1">Register</Header>
	  			<Segment placeholder padded="very">
		        	<Form error>
		        		<Message error content={this.setErrorMessage()} />
		          		<Form.Input icon="user" iconPosition="left" label="Username" placeholder="Username" onChange={this.onNameChange} />
		          		<Form.Input icon="lock" iconPosition="left" label="Password" type="password" onChange={this.onPasswordChange} />
		          		{this.state.buttonLoading ? <Button loading primary content="Register"/> : <Button content="Register" primary onClick={this.onRegister} />}
		          		<Link onClick={() => this.props.changeRoute("login")}>Back to login</Link>
		        	</Form>
	  			</Segment>
	  		</StyledContainer>
	  	)
	}	
}

export default Register;