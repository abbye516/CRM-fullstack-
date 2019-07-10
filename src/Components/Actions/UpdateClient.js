import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios";
import "./actions.css";
import ClientInput from "./ClientInput";
import { Button, Grid, Image, Input } from "semantic-ui-react";

class UpdateClient extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      clientName: "",
      owner: "",
      emailType: "",
      sold: false
    };
  }
  receiveClients = async () => {
    const clients = await axios.get("http://localhost:7000/actions");
    this.setState({
      clients: clients.data
    });
    return clients;
  };
  componentDidMount() {
    this.receiveClients();
    this.clientToUpdate();
  }
  clientToUpdate = async currentClient => {
    console.log(currentClient);
    await this.setState({
      clientName: currentClient
    });
  };
  handleInputs = async event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateOwner = async () => {
    console.log(this.state.clientName);
    await axios.put(`http://localhost:7000/actions/${this.state.clientName}`, {
      owner: this.state.owner
    });
  };
  updateEmail = async () => {
    await axios.put(`http://localhost:7000/actions/${this.state.clientName}`, {
      emailType: this.state.emailType
    });
  };
  //insert method to change sold to true
  updateSoldStatus = async () => {
    await this.setState({
      sold: true
    });
    this.updateSold();
  };
  updateSold = async () => {
    await axios.put(`http://localhost:7000/actions/${this.state.clientName}`, {
      sold: this.state.sold
    });
  };
  render() {
    return (
      <div className="update-container">
        <h2 className="centerHeaders">Update</h2>
        {/* <ClientInput clientToUpdate={this.clientToUpdate} /> */}
        <div className="updateInputs">
          {/* <label for="transferOwner">Transfer ownership to</label>
          <input
            id="transferOwner"
            onInputCapture={this.handleInputs}
            name="owner"
            type="text"
            list="owners"
            placeholder="owner"
          /> */}
          <datalist id="owners">
            {this.state.clients.map(m => {
              return <option>{m.owner}</option>;
            })}
          </datalist>
          {/* <button id="transferOwner" onClick={this.updateOwner}>
            Transfer
          </button> */}
          {/* <br /> */}
          {/* <label for="sendEmail">Send email:</label>
          <input
            id="sendEmail"
            onChange={this.handleInputs}
            type="text"
            list="emailType"
            placeholder="Email Type"
            name="emailType"
          /> */}
          <datalist id="emailType">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </datalist>
          {/* <button id="sendEmail" onClick={this.updateEmail}>
            Send
          </button> */}
          <br />
          {/* <label for="sale">Declare Sale!</label>
          <button onClick={this.updateSoldStatus} id="sale">
            Declare
          </button> */}
        </div>
        <Grid>
          <Grid.Column textAlign="center">
            <ClientInput clientToUpdate={this.clientToUpdate} />
          </Grid.Column>
        </Grid>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Input
                label="Transfer Ownership"
                id="transferOwner"
                onInputCapture={this.handleInputs}
                name="owner"
                type="text"
                list="owners"
                placeholder="new owner"
              />
            </Grid.Column>

            <Grid.Column>
              <Button
                className="actionsBtn"
                color="green"
                id="transferOwner"
                onClick={this.updateOwner}
              >
                Transfer
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Input
                className="inputTest"
                label="Send Email"
                id="sendEmail"
                onChange={this.handleInputs}
                type="text"
                list="emailType"
                placeholder="Email Type"
                name="emailType"
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                className="actionsBtn"
                color="green"
                id="transferOwner"
                onClick={this.updateEmail}
              >
                Send
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Column textAlign="center">
            <Button
              className="actionsBtn"
              color="pink"
              onClick={this.updateSoldStatus}
            >
              Declare Sale!
            </Button>{" "}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default UpdateClient;
