import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Inputform extends Component {
  constructor(percent) {
    super(percent)
    this.state = {
      energy: null,
      technology: null,
      finservices: null,
      realestate: null,
      pharmaceuticals: null,
      airline: null,
      retail: null,
      gaming: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (!Number(val)) {
      alert("The percentage must be a number");
    }
    if (nam === "energy") {
      if (val >= 5) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    if (nam === "technology") {
      if (val >= 6) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    if (nam === "finservices") {
      if (val >= 4) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    if (nam === "realestate") {
      if (val >= 15) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    if (nam === "gaming") {
      if (val >= 12) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    else {
      if (val >= 10) {
        this.setState({[nam]: val});
      }
      else {
        err = <strong>Percentage is below min</strong>;
      }
    }
    this.setState({errormessage: err});
  }
  render() {
    return (
      <form>
        <h1>Enter the percent for each category that you want to invest:</h1>
        <p>Energy (min is 5):</p>
        <input
          type='text'
          name='energy'
          onChange={this.myChangeHandler}
        />
        <p>Technology (min is 6):</p>
        <input
          type='text'
          name='technology'
          onChange={this.myChangeHandler}
        />
        <p>Financial Services (min is 4):</p>
        <input
          type='text'
          name='finservices'
          onChange={this.myChangeHandler}
        />
        <p>Real Estate (min is 15):</p>
        <input
          type='text'
          name='realestate'
          onChange={this.myChangeHandler}
        />
        <p>Pharmaceuticals (min is 10):</p>
        <input
          type='text'
          name='pharmaceuticals'
          onChange={this.myChangeHandler}
        />
        <p>Airline (min is 10):</p>
        <input
          type='text'
          name='airline'
          onChange={this.myChangeHandler}
        />
        <p>Retail (min is 10):</p>
        <input
          type='text'
          name='retail'
          onChange={this.myChangeHandler}
        />
        <p>Gaming (min is 12):</p>
        <input
          type='text'
          name='gaming'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        {this.state.errormessage}
      </form>
    );
  }
}

export default Inputform;