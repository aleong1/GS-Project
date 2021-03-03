import React, { Component } from 'react';
import LineChart from "./LineChart.js";
import Inputform from "./Inputform.js";
import PieChart from "./PieChart.js";

import "./Home.css";

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
            prediction : [0,0,0,0,0,0,0,0,0,0,0],
            historicalReturns: [],
        };
    }

    componentDidMount(){

        this.getHistoricalData();
    }


    /**
     * Updates the state with the allocation requirements and historical returns
     */
    getHistoricalData = () => {

        //get request
        fetch('http://localhost:8080/api/v1/forecast')
        .then(response => response.json())
        .then(data => {this.setState({
                            allocations: data.reduce(
                                (i, dataValue) => ({ ...i, [dataValue.category]: [0, parseInt(dataValue.minimum)]}), {}),
                            historicalReturns : data.map((dataValue) => ({data: dataValue.data.map((returnVal) => parseFloat(returnVal)), 
                                                                        name: dataValue.category}))}
                            )});
    }

    /**
     * Updates the allocation for a particular category
     * @param {String} category the category to update
     * @param {String} userInput the percentage allocation the user inputted
     */
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

    /**
     * Sends a post request to the backend given user input
     * Will send an alert (no post request) if the values are invalid
     */
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

        if(sum !== 100 || !isValid){
            alert("Invalid Input: Check if total is 100 and allocation is at least the minimum!");
        } else {
            console.log("in if statement");
            console.log(this.state);
            this.postForecast();
        }
    }

    /**
     * Sends a post request and updates the state predictions with the response
     */
    postForecast = () => {

        const bodyRequest = {};
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

    /**
     * Returns an array following the format to input to PieChart for percent allocations
     */
    getPercentAllocations = () => {
        return Object.entries(this.state.allocations).map(([category, values]) => ({y: values[0], name: category}));
    }

    render(){

        return (<div className = "Home-container">
                    
                    <LineChart series = {[
                                            { data: this.state.prediction,
                                            name: "Investment Trends" }
                                        ]}
                                      categories =  {['2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028','2029' ,'2030','2031']}
                                      title = "Investment Forecaster"
                                      description = "Customize your investments and view the potential growth of $10,000 over ten years from 2021 to 2031"
                                      yAxisLabel = "Value ($)"
                    />
                    <div className = "Home-userInputContainer">
                        <Inputform allocations = {this.state.allocations}
                                updateAllocation = {this.updateAllocation}
                                handleSubmit = {this.handleSubmit}
                        />
                        <PieChart data = {this.getPercentAllocations()}/>
                    </div>
                    <LineChart newprediction = {this.state.prediction}
                                      title = "Historical Trend"
                                      description = "Returns from the past 10 years"
                                      series = {this.state.historicalReturns}
                                      categories = {['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018' ,'2019','2020']}
                                      yAxisLabel = "Percent Return (%)"
                    />
            </div>);
    }
}

export default Home;
