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
            allocations: {
                "Technology": [0, 0],
                "Financial Services": [0, 0],
                "Real Estate": [0, 0],
                "Pharmaceuticals": [0, 0],
                "Airline": [0, 0],
                "Retail": [0, 0],
                "Gaming": [0, 0],
                "Energy": [0, 0]
            },
            prediction : [0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    componentDidMount(){

        this.getHistoricalData();
    }


    //sends a get request to get the historical data
    getHistoricalData = () => {

        //get request
        fetch('http://localhost:8080/api/v1/forecast')
        .then(response => response.json())
        .then(data => {this.setState({
                            allocations: data.reduce(
                                (i, dataValue) => ({ ...i, [dataValue.category]: [0, parseInt(dataValue.minimum)]}), {})
                            }); });
    }

    //updates the allocation given the input and output
    updateAllocation = (category, userInput) => {
        const tempAllocations= {...this.state.allocations};
        console.log("update allocation");
        tempAllocations[category] = [parseInt(userInput), tempAllocations[category][1]];
        this.setState({
            allocations: tempAllocations,
        }, () => {
            console.log("New state in ASYNC callback:", this.state.allocations[category]);
        });
        console.log("Updated state: " + this.state.allocations[category]);
    }

    //
    handleSubmit = () => {
        let sum = 0;
        let isValid = true;
        for(const category in this.state.allocations){
            if(this.state.allocations[category][0] < this.state.allocations[category][1]){
                isValid = false;
                break;
            }
            sum += this.state.allocations[category][0];
        }

        console.log("submit");
        console.log(this.state);
        if(sum !== 100){
            alert("Total Sum is " + sum);
        } else if (!isValid){
            alert("Not enough allocation for one of the fields!");
        } else {
            console.log("in if statement");
            console.log(this.state);
            this.postForecast();
        }
    }

    //send a post request to get the predicted output
    postForecast = () => {
        const bodyRequest = {};
        console.log(this.state);
        for (const category in this.state.allocations) {
            bodyRequest[category] = this.state.allocations[category][0];
        }
        const requestOptions = {
            method: 'POST',
            
            headers: {  'Content-Type': 'application/json'
            },
            body: JSON.stringify({request: bodyRequest})
        };
        fetch('http://localhost:8080/api/v1/forecast/', requestOptions)
            .then(response => response.json())
            .then(data => {this.setState({prediction: data['response']})});
    }

    render(){
        return (<div>
                    <LineChartExample newprediction = {this.state.prediction}
                    />
                    <Inputform allocations = {this.state.allocations}
                               updateAllocation = {this.updateAllocation}
                               handleSubmit = {this.handleSubmit}
                    />
            </div>);
    }
}

export default Home;
