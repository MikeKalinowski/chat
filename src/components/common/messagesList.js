import React from 'react';
import styled from 'styled-components'
import { Comment } from 'semantic-ui-react'

const MessagesWrapper = styled.div`
	height: 300px;
	width: 800px;
	border: 1px solid black;
	overflow: auto
`

class MessagesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	    };
	    this.eventSource = ""
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	componentDidUpdate(prevProps) {
		this.scrollToBottom();
	}

	// Scrolls to the bottom of chat window (newest message)
	scrollToBottom = () => { 
	  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	}

	renderMessages = () => {
		return (this.props.messages.map(message => 
			<Comment key={message.id}>
			   	<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
			   	<Comment.Content>
			     	<Comment.Author as='a'>{message.userId}</Comment.Author>
			     	<Comment.Metadata>
			       		<div>{message.date}</div>
			     	</Comment.Metadata>
			     	<Comment.Text>{message.content}</Comment.Text>
			   </Comment.Content>
			</Comment>
		))	
	}

	// message.date.getDate() + "-" + message.date.getMonth() + 1 + "-" + message.date.getFullYear() TODODODO
	// .toLocaleDateString("en-US")


	render() {
		return(
			<MessagesWrapper>
				{(this.props.messages.length < 1) && (<div>Your message will be the first one</div>)}
				<Comment.Group>
					{this.renderMessages()}
				</Comment.Group>
				<div style={{ float:"left", clear: "both" }} // This is dummy div needed to scroll to the bottom of chat window (scrollToBottom)
				    ref={el => { this.messagesEnd = el; }}>
				</div>
			</MessagesWrapper>
		)
	}
}

export default MessagesList;