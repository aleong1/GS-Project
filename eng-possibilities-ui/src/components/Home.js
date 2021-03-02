import React, { Component } from 'react';
import "./LineChartExample.js"
import LineChartExample from "./LineChartExample.js"

class Home extends Component {
    constructor(props){
        super(props);
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
