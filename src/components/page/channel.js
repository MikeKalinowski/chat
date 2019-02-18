import React from 'react';
import styled from 'styled-components'

const ChannelWrapper = styled.div`
	padding: 30px 100px 
`

const MessagesWrapper = styled.div`
	height: 300px;
	width: 800px;
	border: 1px solid black;
	overflow: auto
`

class Channel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageText: "",
			messages: []
	    }
	}

	componentDidMount() {
		this.getMessages();
	}

	getMessages() {
		fetch('http://localhost:8000/messagesList', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			    channelId: this.props.channelId
			})
		})
		.then(res => res.json())
		.then(res => this.setState({messages: res}))
	}

	renderMessages = () => {
		if (this.state.messages.length < 1) {
			return (<div>Your message will be the first one</div>)
		} else {
			return (this.state.messages.map(message => (<div key={message.id}>{message.userId} {message.content}</div>)))
		}
	}

	onMessageChange = (event) => {
		this.setState({ messageText: event.target.value })
	}

	sendMessage = () => {
		this.state.messageText && fetch('http://localhost:8000/sendMessage', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
			    content: this.state.messageText,
			    userId: 1,
			    channelId: this.props.channelId,
			})
		})
		.then(res => res.json())
		.then(() => this.getMessages())
		.then(() => this.resetInput())
	}

	resetInput = () => {
	    const resetButton = document.getElementById("messageInput");
	    resetButton.value = "";
	    this.setState({ messageText: "" });
	}

	render() {
		return(
			<ChannelWrapper>
				<MessagesWrapper>{this.renderMessages()}</MessagesWrapper>
				<input placeholder="Message text" onChange={this.onMessageChange} id="messageInput" autoComplete="off"/>
				<button onClick={this.sendMessage}>Send message</button>
				<button onClick={() => {this.props.routeChanger("main")}}>Back</button>
			</ChannelWrapper>
			)
	}
}

export default Channel;