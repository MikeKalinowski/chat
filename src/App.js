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
			user: {}
		}
	}

	componentDidMount() {
		this.wakeServerUp();
	}

	// Needed because heroku goes to sleep when idle. User will be able to do stuff faster
	wakeServerUp = () => {
		fetch('https://chattychat777.herokuapp.com/');
	}

	pickRoute = () => {
		if (this.state.route === "register") {
			return (<Register changeRoute={this.changeRoute} saveUserData={this.saveUserData}/>)
		} else if (this.state.route === "main") {
			return (<Main changeRoute={this.changeRoute} user={this.state.user}/>)
		} else if (this.state.route === "login") {
			return (<Login changeRoute={this.changeRoute} saveUserData={this.saveUserData}/>)
		} else if (this.state.route === "channel") {
			return (<Channel changeRoute={this.changeRoute} channelId={this.state.channelId} user={this.state.user}/>)
		}
	}

	changeRoute = (newRoute, channelId) => {
		channelId && this.setState({channelId: channelId}); // takes channelId of clicked channel from Main component to pass it to Channel
		this.setState({route: newRoute});
	}

	// Saving data from db
	saveUserData = (data) => {
		this.setState({ user: data})
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
