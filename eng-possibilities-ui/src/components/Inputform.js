import React, { Component } from 'react';
import "./Inputform.css";

/**
 * This class takes in the user input for percent allocations
 * 
 * Proptypes
 * @param {Object} allocations where the key is a {String} category mapped to an Array<Number> of values where values[0] is the user input
 *                 percent allocation and values[1] is the minimum percent required
 * @param {(String, String) => void} updateAllocation updates the state in home with the user input where param1 = category, param2 = percent
 * @param {() => void} handleSubmit function to call when submitting
 * 
 */
class Inputform extends Component {

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.props.updateAllocation(nam, val);
  }

  render() {
    return (
      <div className="input">
        <h1>Enter the percent for each category that you want to invest:</h1>
        { Object.entries(this.props.allocations).map(([category, values]) => (
          <div key = {category} className="category">
            <p>{category} (min is {values[1]}): 
            <input
              type='text'
              name={category}
              onChange={this.myChangeHandler}
              size="15"
            /> </p>
          </div>))}
          <p>Current Total: {Object.values(this.props.allocations).reduce((acc, value) => acc + value[0], 0 )} </p>
          <button onClick = {this.props.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Inputform;