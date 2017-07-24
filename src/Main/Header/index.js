import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="container container--header">
          <span>Lorem ipsum</span>
          <div className="signIn">
            <span className="signIn__user"><i className="fa fa-user"></i>UserName</span>
            <Link className="signIn__login" to="/autorization">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

