import React from 'react';


import { Card, Segment } from 'semantic-ui-react'



class ChannelsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelClicked: false,
			channels: []
	    }
	}

	componentDidMount() {
		this.getChannels();
	}

	componentDidUpdate(prevProps) {
		(prevProps.refreshChannelState !== this.props.refreshChannelState) && (this.getChannels());
	}

	getChannels = () => {
		fetch("https://chattychat777.herokuapp.com/channelsList")
		.then(res => res.json())
		.then(res => {this.setState({channels: res})})
	}

	renderChannels = () => {
		return this.state.channels.map(channel => (
			<Card key={channel.id} onClick={() => {
				this.props.changeRoute("channel");
				this.props.passChannelData(channel.id, channel.name)
				}}>
			  <Card.Content>
			    <Card.Header>{channel.name}</Card.Header>
			    <Card.Description>{channel.description}</Card.Description>
			  </Card.Content>
			</Card>
		))
	}

	render() {
		return(
			<Segment placeholder>
				<Card.Group centered>
					{this.renderChannels()}
				</Card.Group>
			</Segment>
		)
	}
}

export default ChannelsList;