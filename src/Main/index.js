import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import Filter from './Filter';
import Table from './Table';


export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Filter />
        <Table />
      </div>
    );
  }
}


