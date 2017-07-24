import React, { Component } from 'react';
import './style.css';

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

export default class Filter extends Component {
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