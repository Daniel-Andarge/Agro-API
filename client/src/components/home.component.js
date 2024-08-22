import React, { Component } from 'react';
import UserService from '../services/user.service';
import Banner from './banner';
import cow from '../assets/cow.JPG';
import poultry from '../assets/poulty.png';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container-fluid mt-3">
        <header className="jumbotron">
          <h1>AGRO API</h1>
          <br></br>
          <h2>Empowering Agriculture, Simplifying Supply Chains</h2>
        </header>

        <Banner
          head1="ABOUT"
          content="AgroAPI is an agricultural-focused web service specializing in the Poultry Farming sector in Ethiopia. The poultry value chain in Ethiopia is fragmented and in its early stages. AgroAPI was developed to address these challenges. It provides data and information related to Poultry Farming in Ethiopia through APIs, supporting developers, researchers, and organizations."
          image={poultry}
        />

        <Banner
          head1="Dairy"
          head2="Farming"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit ipsam laboriosam, totam ab ducimus sint officia dolore nulla voluptatem, dignissimos ea explicabo! Velit vero deleniti saepe fugiat nulla labore."
          image={cow}
        />
      </div>
    );
  }
}
