import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'

import Login from './components/page/login.js';
import Register from './components/page/register.js';
import Main from './components/page/main.js';
import { Theme } from './theme.js';
import './fonts.css';

const MainWrapper = styled.div`
	color: ${props => props.theme.color.darkGray};
`

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			route: "main"
		}
	}

	routePicker = () => {
		console.log("routePicker")
		if (this.state.route === "register") {
			return (<Register routeChanger={this.routeChanger}/>)
		} else if (this.state.route === "main") {
			return (<Main />)
		} else if (this.state.route === "login") {
			return (<Login routeChanger={this.routeChanger}/>)
		}
	}

	routeChanger = (newRoute) => {
		this.setState({route: newRoute});
		console.log("routeChanger")
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
