import React, { Component } from "react";

import UserService from "../services/user.service";

import Banner from "./banner";
import cow from "../assets/cow.JPG"
import poulty from "../assets/poulty.png"

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
        <h1>Welcome to AgroAPI </h1>
          {/* <h3>{this.state.content}</h3> */}
       

        </header>
        <Banner
          head1="Who we "
          head2="are"
          content={"AgroAPI is an agricultural focused web service on Poultry Farming sector in Ethiopia, In Ethiopia The poultry value chain is very fragmented and at its early stage.  AgroAPI is developed considering this problem , It provides data or  information related to Poultry Farming in Ethiopia through APIs  for developers who want to build agricultural websites or applications and for individuals or organizations who want to make a research."}
          image={poulty}  
       /> 

<Banner
          head1="Dairy"
          head2="Farming"
          content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore.  "}
          image={cow}  
       /> 
      </div>
      
    );
  }
}
