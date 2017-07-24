import React, { Component } from 'react';
import './style.css';

export default class Table extends Component {
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