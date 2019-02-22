import React from 'react';
import CreateChannel from '../common/createChannel'
import ChannelsList from '../common/channelsList'
import styled from 'styled-components'

import { Header, Container, Segment } from 'semantic-ui-react'


const StyledContainer = styled(Container)`
	&&& {
		margin-top: 60px;
		max-width: 800px!important;
	}
`

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelName: "",
			refreshChannelState: 0
	    }
	}

	// This will tell ChannelsList when to refresh channels when a new one is created
	refreshChannelList = () => {
		this.setState({ refreshChannelState: this.state.refreshChannelState+1 });
	}

	render() {
	  	return(
	  		<StyledContainer>
	  			<Segment>
	  				<Header as='h1' textAlign="center">Channels</Header>
	  				<ChannelsList refreshChannelState={this.state.refreshChannelState} routeChanger={this.props.routeChanger}/>
	  			</Segment>
	  			<CreateChannel refreshChannelList={this.refreshChannelList}/>
	  		</StyledContainer>
	  	)
	}	
}



export default Main;