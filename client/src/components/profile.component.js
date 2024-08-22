import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: '' },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: '/home' });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  copyToClipboard = () => {
    const token = this.state.currentUser.accessToken;
    navigator.clipboard
      .writeText(token)
      .then(() => {
        alert('Token copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy token: ', err);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container-fluid mt-3">
        {this.state.userReady ? (
          <div>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.username}</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong> {currentUser.accessToken}{' '}
              <button
                onClick={this.copyToClipboard}
                className="btn btn-success btn-sm"
              >
                Copy Token
              </button>
            </p>
            <p>
              <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
