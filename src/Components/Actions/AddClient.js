import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios";
import "./actions.css";
import { Button, Grid, Image, Input } from "semantic-ui-react";

class AddClient extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      surname: "",
      country: "",
      owner: ""
    };
  }
  updateClient = async () => {
    await axios.post(`http://localhost:7000/actions`, {
      name: `${this.state.firstname} ${this.state.surname}`,
      country: this.state.country,
      owner: this.state.owner
    });
    //clear state function
  };
  eventHandler = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="addClient-container">
        <h2 className="centerHeaders">Add Client</h2>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Input
                label="First Name"
                placeholder="John"
                type="text"
                name="firstname"
                onChange={this.eventHandler}
                value={this.state.firstname}
              />
            </Grid.Column>
            <Grid.Column>
              <Input
                label="Country"
                placeholder="Israel"
                id="country"
                type="text"
                name="country"
                onChange={this.eventHandler}
                value={this.state.country}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Input
                label="Last Name"
                placeholder="Smith"
                id="SN"
                type="text"
                name="surname"
                onChange={this.eventHandler}
                value={this.state.surname}
              />
            </Grid.Column>
            <Grid.Column>
              <Input
                label="Owner"
                placeholder="No one"
                id="owner"
                type="text"
                name="owner"
                onChange={this.eventHandler}
                value={this.state.owner}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Column textAlign="center">
            <Button
              className="actionsBtn"
              color="pink"
              onClick={this.updateClient}
            >
              Add Client
            </Button>{" "}
          </Grid.Column>
        </Grid>

        {/* <div id="add-client" onClick={this.updateClient}>Add Client</div> */}
      </div>
    );
  }
}

export default AddClient;
