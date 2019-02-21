import React from 'react';
import styled from 'styled-components'

import MessagesList from '../common/messagesList'

const ChannelWrapper = styled.div`
	padding: 30px 100px 
`

class Channel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageText: "",
			messages: []
	    };
	    this.eventSource = ""
	}

	componentDidMount() {
		this.getMessages();
		this.setMessagesSSE();
	}

	componentWillUnmount() {
		this.eventSource.close()
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

	//Server Sent Events listener that gets messages when sb writes new one
	setMessagesSSE = () => { 
		const urlWithChannelId = 'http://localhost:8000/messagesListSSE/' + this.props.channelId // Allows to send proper SSE messages from server
		this.eventSource = new EventSource(urlWithChannelId);
		this.eventSource.onmessage = (e) => {
			this.setState({messages: JSON.parse(e.data)}) 
		};
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
		.then(() => this.getMessages())
		.then(() => this.resetInput())
	}

	resetInput = () => {
	    const resetButton = document.getElementById("messageInput");
	    resetButton.value = "";
	    this.setState({ messageText: "" });
	}

	keyPress = e => {
	    (e.keyCode === 13) && this.sendMessage()
	}
	
	render() {
		return(
			<ChannelWrapper>
				<MessagesList messages={this.state.messages}/>
				<input placeholder="Message text" onChange={this.onMessageChange} id="messageInput" autoComplete="off" onKeyDown={this.keyPress}/>
				<button onClick={this.sendMessage}>Send message</button>
				<button onClick={() => {this.props.routeChanger("main")}}>Back</button>
			</ChannelWrapper>
			)
	}
}

export default Channel;