import React from 'react';
import styled from 'styled-components'
import CreateChannel from '../common/createChannel'
import ChannelsList from '../common/channelsList'

import { Header } from 'semantic-ui-react'

const MainWrapper = styled.div`
	padding: 30px 100px 
`

const ChannelsWrapper = styled.div`
	width: 800px;
	border: 1px solid black;
	overflow: auto;
	margin: 0 auto;
`


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelClicked: false,
			newChannelName: "",
			refreshChannelState: 0
	    }
	}

	newChannelClick = () => {
		this.setState({ newChannelClicked: !this.state.newChannelClicked });
	}

	refreshChannelList = () => {
		this.setState({ refreshChannelState: this.state.refreshChannelState+1 });
	}

	render() {
	  	return(
	  		<MainWrapper>
	  			<ChannelsWrapper>
	  				<Header as='h1' textAlign="center">Channels</Header>
	  				<ChannelsList refreshChannelState={this.state.refreshChannelState} routeChanger={this.props.routeChanger}/>
	  			</ChannelsWrapper>
	  			<CreateChannel refreshChannelList={this.refreshChannelList}/>
	  		</MainWrapper>
	  	)
	}	
}



export default Main;