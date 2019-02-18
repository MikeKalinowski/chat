import React from 'react';
import styled from 'styled-components'

const NewChannelWrapper = styled.div`
	
`

class CreateChannel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelName: "",
			errorCreating: "",
	    }
	}

	onChannelNameChange = (event) => {
		this.setState({ newChannelName: event.target.value })
	}

	createChannel = () => {
		if (!this.state.newChannelName) {
			this.setState({ errorCreating: "Empty" })
		} else {
			fetch('http://localhost:8000/createChannel', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
				    newChannelName: this.state.newChannelName,
				})
			})
			.then(res => res.json())
			.then(res => {
				if (res === "Channel Added") {
					this.props.refreshChannelList()
					this.props.newChannelClick(); // Hiding this component // TODO: Add some pretty transition
				} else if (res === "Existing") {
					this.setState({ errorCreating: "Existing" })
				} else {
					this.setState({ errorCreating: "Error" })
				}
			})
		}
	}

	errorMessage = () => {
		if (this.state.errorCreating === "Existing") {
			return (<div>Channel with that name already exists</div>)
		} else if (this.state.errorCreating === "Error") {
			return (<div>Error creating channel. Please try again later</div>)
		} else if (this.state.errorCreating === "Empty") {
			return (<div>Please enter channel name</div>)
		}
	}

	render() {
		return(
			<NewChannelWrapper>
				{this.errorMessage()}
				<input placeholder="channel name" onChange={this.onChannelNameChange} />
				<button onClick={this.createChannel}>Create</button>
			</NewChannelWrapper>
			)
	}
}

export default CreateChannel;