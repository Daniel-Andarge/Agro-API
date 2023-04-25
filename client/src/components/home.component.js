import React, { Component } from "react";

import UserService from "../services/user.service";

import Banner from "./banner";
import cow from "../assets/cow.JPG"
export default class Home extends Component {
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
        <h1>Welcome To AgroAPI </h1>
          {/* <h3>{this.state.content}</h3> */}
       

        </header>
        <Banner
          head1="Welcome"
          head2="World"
          content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
          image={cow}  
       /> 

<Banner
          head1="Welcome"
          head2="World"
          content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
          image={cow}  
       /> 
      </div>
      
    );
  }
}
