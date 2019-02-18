import React from 'react';
import styled from 'styled-components'
import CreateChannel from '../common/createChannel'
import ChannelsList from '../common/channelsList'

const MainWrapper = styled.div`
	padding: 30px 100px 
`

const ChannelsWrapper = styled.div`
	height: 300px;
	width: 800px;
	border: 1px solid black;
	overflow: auto
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
	  			<ChannelsWrapper><ChannelsList refreshChannelState={this.state.refreshChannelState} routeChanger={this.props.routeChanger}/></ChannelsWrapper>
	  			<button onClick={this.newChannelClick}>New channel</button>
	  			{this.state.newChannelClicked && <CreateChannel newChannelClick={this.newChannelClick} refreshChannelList={this.refreshChannelList}/>}
	  		</MainWrapper>
	  	)
	}	
}



export default Main;