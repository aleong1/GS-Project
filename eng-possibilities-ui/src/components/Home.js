import React, { Component } from 'react';
import "./LineChartExample.js"
import LineChartExample from "./LineChartExample.js"

/**
 * This is the home page to display all the info
 */
class Home extends Component {
    constructor(props){
        super(props);

        //what state
        //state to keep track of the allocations per category (map)
        //state to keep track of the predicted 10 years
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/v1/forecast')
        .then(response => response.json())
        .then(data => {console.log(data);});
    }

    render(){
        return (<div>
                    <div>This is the home page</div>
                    <LineChartExample />
            </div>);
    }
}

export default Home;
