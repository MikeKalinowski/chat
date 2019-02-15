import React from 'react';
import styled from 'styled-components'

const ChannelsListWrapper = styled.div`
	
`

class ChannelsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelClicked: false
	    }
	}

	getChannels = () => {
		fetch('http://localhost:8000/channelsList')
		.then(res => res.json())
		// .then(res => console.log(res)) //TODO: Delete later. Left for debugging
		.then(channels => {
			channels.map((channel) => {
				console.log(channel.name)
				// return (<div>{channel.name}</div>)
			})
		})
	}

	render() {
		return(
			<ChannelsListWrapper>
				Channels go here
				{this.getChannels()}
			</ChannelsListWrapper>
			)
	}
}

export default ChannelsList;