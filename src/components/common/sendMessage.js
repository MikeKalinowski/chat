import React from 'react';

import { Form, Button } from 'semantic-ui-react'

class SendMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageText: "",
	    };
	}

	onMessageChange = (event) => {
		this.setState({ messageText: event.target.value });
	}

	onKeyPress = (event) => {
	    (event.keyCode === 13) && this.sendMessage();
	}

	sendMessage = () => {
		this.state.messageText && fetch('http://localhost:8000/sendMessage', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			    content: this.state.messageText,
			    userId: this.props.user.id,
			    channelId: this.props.channelId,
			})
		})
		.then(() => this.props.getMessages(this.props.channelId))
		.then(() => this.resetInput())
	}

	resetInput = () => {
	    const resetButton = document.getElementById("messageInput");
	    resetButton.value = "";
	    this.setState({ messageText: "" });
	}
	
	render() {
		return(
			<Form reply>
			    <Form.TextArea onChange={this.onMessageChange} onKeyDown={this.onKeyPress} placeholder="Message text" id="messageInput"/>
			    <Button onClick={this.sendMessage} content='Send' labelPosition='left' icon='edit' primary />
			    <Button onClick={() => {this.props.changeRoute("main")}}>Back</Button>
			</Form>
		)
	}
}

export default SendMessage;