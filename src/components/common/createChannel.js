import React from 'react';
import styled from 'styled-components'

import { Button, Modal, Message, Form } from 'semantic-ui-react'

const NewChannelWrapper = styled.div`
	
`

class CreateChannel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newChannelName: "",
			newChannelDescription: "",
			errorCreating: "",
			modalOpen: false
	    }
	}

	onChannelNameChange = (event) => {
		this.setState({ newChannelName: event.target.value });
	}

	onChannelDescriptionChange = (event) => {
		this.setState({ newChannelDescription: event.target.value });
	}

	createChannel = () => {
		if (!this.state.newChannelName || !this.state.newChannelDescription) {
			this.setState({ errorCreating: "Empty" });
		} else {
			fetch("https://chattychat777.herokuapp.com/createChannel", {
				method: "post",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
				    newChannelName: this.state.newChannelName,
				    newChannelDescription: this.state.newChannelDescription,
				})
			})
			.then(res => res.json())
			.then(res => {
				if (res === "Channel Added") {
					this.props.refreshChannelList();
					this.handleModalClose();
				} else if (res === "Existing") {
					this.setState({ errorCreating: "Existing" });
				} else {
					this.setState({ errorCreating: "Error" });
				}
			})
		}
	}

	setErrorMessage = () => {
		switch (this.state.errorCreating) {
		  	case "Existing":
			    return (<div>Channel with that name already exists</div>);
			case "Error":
			    return (<div>Error creating channel. Please try again later</div>);
			case "Empty":
			    return (<div>Please enter channel name and description</div>);
			default:
				break;
		}
	}

	handleModalOpen = () => this.setState({ modalOpen: true });

	handleModalClose = () => this.setState({ modalOpen: false });

	render() {
		return(
			<NewChannelWrapper>
				<Modal 
					trigger={<Button onClick={this.handleModalOpen}>New Channel</Button>}
					size="mini"
					open={this.state.modalOpen}
					onClose={this.handleModalClose}
				>
				    <Modal.Header>Create channel</Modal.Header>
				    <Modal.Content>
				      	<Modal.Description>
			      			<Form error>
			      				<Message
			      				    error
			      				    content={this.setErrorMessage()}
			      				/>
			      		  		<Form.Input label="Channel name" placeholder="Channel name" onChange={this.onChannelNameChange} />
			      		  		<Form.Input label="Description" type="Description" onChange={this.onChannelDescriptionChange} />
			      		  		<Button content="Create" primary onClick={this.createChannel} />
			      			</Form>
				      	</Modal.Description>
				    </Modal.Content>
				</Modal>
			</NewChannelWrapper>
		)
	}
}

export default CreateChannel;