import React, { Component } from "react";

import UserService from "../services/user.service";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.content}</h3> */}
        
          <SwaggerUI url="https://json.extendsclass.com/bin/aca637dda45c" />
        </header>
      </div>
      
    );
  }
}
