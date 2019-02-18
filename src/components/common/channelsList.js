import React from 'react';
import styled from 'styled-components'

const ChannelsListWrapper = styled.div`
	
`

class ChannelsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelClicked: false,
			channels: []
	    }
	}

	componentDidMount() {
		this.getChannels()
	}

	componentDidUpdate(prevProps) {
		(prevProps.refreshChannelState !== this.props.refreshChannelState) && (this.getChannels());
	}

	getChannels = () => {
		fetch('http://localhost:8000/channelsList')
		.then(res => res.json())
		.then(res => {this.setState({channels: res})})
	}

	renderChannels = () => {
		return this.state.channels.map(channel => (<div key={channel.id} onClick={() => this.props.routeChanger("channel", channel.id)}>{channel.name}</div>))
	}

	render() {
		return(
			<ChannelsListWrapper>
				{this.renderChannels()}
			</ChannelsListWrapper>
			)
	}
}

export default ChannelsList;