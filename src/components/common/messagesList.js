import React from 'react';
import styled from 'styled-components'
import { Comment, Segment } from 'semantic-ui-react'

const StyledSegment = styled(Segment)`
	height: 300px;
	overflow: auto;
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
	  this.messagesEnd.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
	}

	dateMagic = (date) => {
		let a = new Date(date)
		let finalDate = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
		return finalDate
	}

	renderMessages = () => {
		return (this.props.messages.map(message => 
			<Comment key={message.id}>
			   	<Comment.Avatar src='https://ui-avatars.com/api/?name=Mike&length=1&rounded=true' />
			   	<Comment.Content>
			     	<Comment.Author as='a'>{message.userId}</Comment.Author>
			     	<Comment.Metadata>
			       		<div>{this.dateMagic(message.date)}</div>
			     	</Comment.Metadata>
			     	<Comment.Text>{message.content}</Comment.Text>
			   </Comment.Content>
			</Comment>
		))	
	}
	// Math.floor(Math.random()*16777215).toString(16) // TODO // Random hex color for avatars 

	render() {
		return(
			<StyledSegment>
				{(this.props.messages.length < 1) && (<div>Your message will be the first one</div>)}
				<Comment.Group>
					{this.renderMessages()}
				</Comment.Group>
				<div style={{ float:"left", clear: "both" }} // Dummy div needed to scroll to the bottom of chat window (scrollToBottom)
				    ref={el => { this.messagesEnd = el; }} />
			</StyledSegment>
		)
	}
}

export default MessagesList;