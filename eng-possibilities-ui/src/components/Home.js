import React, { Component } from 'react';
import "./LineChartExample.js"
import LineChartExample from "./LineChartExample.js"
import Inputform from "./Inputform.js"

/**
 * This is the home page to display all the info
 */
class Home extends Component {
    constructor(props){
        super(props);

        //what state
        //state to keep track of the allocations per category (map)
        //state to keep track of the predicted 10 years
        this.state = {
            prediction : [10,20,30,40,50,60,30,80,100,10,50]
        };
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/v1/forecast')
        .then(response => response.json())
        .then(data => {console.log(data);});
    }

    render(){
        return (<div>
                    <LineChartExample newprediction = {this.state.prediction} />
                    <Inputform />
            </div>);
    }
}

export default Home;
