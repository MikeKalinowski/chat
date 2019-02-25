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
	    this.eventSource = "";
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

	makeDatePretty = (date) => {
		let a = new Date(date)
		let hh = a.getHours();
		let mm = a.getMinutes();
		let ss = a.getSeconds();
		(mm < 10) && (mm = '0' + mm);
		(ss < 10) && (ss = '0' + ss);
		let finalDate = hh + ":" + mm + ":" + ss;
		return finalDate;
	}

	renderMessages = () => {
		return (this.props.messages.map(message => 
			<Comment key={message.id}>
			   	<Comment.Avatar src={"https://ui-avatars.com/api/?name=" + message.name + "&background=" + message.avatarColor + "&length=1&rounded=true"} />
			   	<Comment.Content>
			     	<Comment.Author as='a'>{message.name}</Comment.Author>
			     	<Comment.Metadata>
			       		<div>{this.makeDatePretty(message.date)}</div>
			     	</Comment.Metadata>
			     	<Comment.Text>{message.content}</Comment.Text>
			   </Comment.Content>
			</Comment>
		))	
	}
	// Math.floor(Math.random()*16777215).toString(16) // TODO // Random hex color for avatars 

	showPlaceholderForMessages = () => {
		if (this.props.messagesLoaded === true) {
			return (this.props.messages.length < 1) && (<div>Your message will be the first one</div>)
		} else {
			return (<div>Loading messages...</div>)
		} 
	}

	render() {
		return(
			<StyledSegment>
				{this.showPlaceholderForMessages()}
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