import React, { Component } from 'react';
import "./LineChartExample.js"
import LineChartExample from "./LineChartExample.js"

class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (<div>
                    <div>This is the home page</div>
                    <LineChartExample />
            </div>);
    }
}

export default Home;
