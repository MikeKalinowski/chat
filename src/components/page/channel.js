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
	    };
	    this.eventSource = ""
	}

	componentDidMount() {
		this.getMessages();
		this.scrollToBottom();
		this.setMessagesSSE();
	}

	componentDidUpdate() {
		this.scrollToBottom();
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

	// Scrolls to the bottom of chat window (newest message)
	scrollToBottom = () => { 
	  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	//Server Sent Events listener that gets messages when sb writes new one
	setMessagesSSE = () => { 
		const urlWithChannelId = 'http://localhost:8000/messagesListSSE/' + this.props.channelId // Allows to send proper SSE messages from server
		this.eventSource = new EventSource(urlWithChannelId);
		this.eventSource.onmessage = (e) => {
			console.log(JSON.parse(e.data));
			this.setState({messages: JSON.parse(e.data)}) 
		};
	}

	renderMessages = () => {
		if (this.state.messages.length < 1) {
			return (
				<div>
					<div>Your message will be the first one</div>
					<div style={{ float:"left", clear: "both" }} // This is fake div to scroll to the bottom of chat window (scrollToBottom)
					    ref={el => { this.messagesEnd = el; }}>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					{this.state.messages.map(message => (<div key={message.id}>{message.userId} {message.date} {message.content}</div>))}
					<div style={{ float:"left", clear: "both" }} // This is fake div to scroll to the bottom of chat window (scrollToBottom)
					    ref={el => { this.messagesEnd = el; }}>
					</div>
				</div>
			)
		}
	}

	// message.date.getDate() + "-" + message.date.getMonth() + 1 + "-" + message.date.getFullYear() TODODODO
	// .toLocaleDateString("en-US")

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