import React from 'react';
import styled from 'styled-components'

const MainWrapper = styled.div`
`

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	    }
	}

	render() {
	  	return(
	  		<MainWrapper>
	  			This is MAIN
	  		</MainWrapper>
	  	)
	}	
}



export default Main;