import React from 'react';
import styled from 'styled-components'
import MessagesList from '../common/messagesList'
import SendMessage from '../common/sendMessage'

import { Container } from 'semantic-ui-react'


const StyledContainer = styled(Container)`
	&&& {
		margin-top: 60px;
		max-width: 800px!important;
	}
`

class Channel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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

	getMessages = () => {
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
	
	render() {
		return(
			<StyledContainer>
				<MessagesList messages={this.state.messages}/>
				<SendMessage routeChanger={this.props.routeChanger} getMessages={this.getMessages} channelId={this.props.channelId} user={this.props.user}/>
			</StyledContainer>
			)
	}
}

export default Channel;