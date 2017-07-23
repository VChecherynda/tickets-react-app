import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="container container--header">
          <span>Lorem ipsum</span>
          <div className="signIn">
            <span className="signIn__user"><i className="fa fa-user"></i>UserName</span>
            <button className="signIn__login">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

class InputFields extends Component {
  render() {
    return(
      <div>
        <form className="form">
          <div className="form__inputs">
            <div className="form__input">
              <label>From:</label>
              <input id="from" type="text" />
            </div>
            <div className="form__input">
              <label>To:</label>
              <input id="to" type="text" />
            </div>
          </div>
          <div className="form__submit">
            <input className="form__button" type="submit" value="Search"/>  
          </div>
          
        </form>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div className="filter">
        <div className="container container--filter">
            <div className="filter__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate animi, voluptatem dolorum. Asperiores assumenda 
              officia nulla impedit ratione vero quod, illo consectetur aspernatur 
              voluptatem natus nobis</p>
            </div>
            <InputFields />
        </div>
      </div>
    );
  }
}

class Table extends Component {
  render() {
    return(
      <div className="table">
        <div className="container container--table">
          <table className="table__body" >
            <thead>
              <tr>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One</td>
                <td>Two</td>
                <td>Three</td>
              </tr>
              <tr>
                <td>One</td>
                <td>Two</td>
                <td>Three</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Table />
      </div>
    );
  }
}

export default App;
