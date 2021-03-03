import React, { Component } from 'react';

class Inputform extends Component {

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.props.updateAllocation(nam, val);
  }

  render() {
    console.log(Object.values(this.props.allocations));
    console.log(Object.values(this.props.allocations).reduce((acc, value) => acc + value[0], 0 ));
    return (
      <div style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)'}} >
        <h1>Enter the percent for each category that you want to invest:</h1>
        { Object.entries(this.props.allocations).map(([category, values]) => (
          <div key = {category}>
            <p>{category} (min is {values[1]}): 
            <input
              type='text'
              name={category}
              onChange={this.myChangeHandler}
            /> </p>
          </div>))}
          <p>Current Total: {Object.values(this.props.allocations).reduce((acc, value) => acc + value[0], 0 )} </p>
          <button onClick = {this.props.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default Inputform;