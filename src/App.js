import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

import Login from './components/page/login.js';
import Register from './components/page/register.js';
import Main from './components/page/main.js';
import Channel from './components/page/channel.js'
import { Theme } from './theme.js';
import './fonts.css';

const MainWrapper = styled.div`
	color: ${props => props.theme.color.darkGray};
`

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			route: "login",
			channelId: 0,
			channelName: "",
			user: {}
		}
	}

	componentDidMount() {
		this.wakeServerUp();
	}

	// Needed because heroku goes to sleep when idle. User will be able to do stuff faster
	wakeServerUp = () => {
		fetch("https://chattychat777.herokuapp.com/");
	}

	pickRoute = () => {
		switch (this.state.route) {
		  	case "register":
			    return (<Register changeRoute={this.changeRoute} saveUserData={this.saveUserData}/>);
			case "main":
			    return (<Main changeRoute={this.changeRoute} passChannelData={this.passChannelData} user={this.state.user}/>);
			case "login":
			    return (<Login changeRoute={this.changeRoute} saveUserData={this.saveUserData}/>);
			case "channel":
			    return (<Channel changeRoute={this.changeRoute} channelId={this.state.channelId} channelName={this.state.channelName} user={this.state.user}/>);
			default:
				break;
		}
	}

	changeRoute = (newRoute, channelId) => {
		this.setState({route: newRoute});
	}

	// Saving data from db
	saveUserData = (data) => {
		this.setState({ user: data})
	}

	// takes channel Id and Name of clicked channel from Main component to pass it to Channel
	passChannelData = (channelId, channelName) => {
		this.setState({ channelName: channelName});
		this.setState({ channelId: channelId});
	}

  	render() {
		return (
		  	<ThemeProvider theme={Theme}>
		  		<MainWrapper>
		  			{this.pickRoute()}
		  		</MainWrapper>
		  	</ThemeProvider>
		);
	}
}

export default App;
