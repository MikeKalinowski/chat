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
			channelId: 0
		}
	}

	routePicker = () => {
		if (this.state.route === "register") {
			return (<Register routeChanger={this.routeChanger}/>)
		} else if (this.state.route === "main") {
			return (<Main routeChanger={this.routeChanger}/>)
		} else if (this.state.route === "login") {
			return (<Login routeChanger={this.routeChanger}/>)
		} else if (this.state.route === "channel") {
			return (<Channel routeChanger={this.routeChanger} channelId={this.state.channelId}/>)
		}
	}

	routeChanger = (newRoute, channelId) => {
		channelId && this.setState({channelId: channelId}); // takes channelId of clicked channel from Main component to pass it to Channel
		this.setState({route: newRoute});
	}

  	render() {
		return (
		  	<ThemeProvider theme={Theme}>
		  		<MainWrapper>
		  			{this.routePicker()}
		  		</MainWrapper>
		  	</ThemeProvider>
		);
	}
}

export default App;
