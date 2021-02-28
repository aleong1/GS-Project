
import React, { Component } from "react";
import "./components/Home.js"
import './App.css';
import Home from "./components/Home.js";

class App extends Component {

  //props
  // constructor(props){
  //   super(props);
  // }

  //runs once when component is mounted
  componentDidMount(){

  }

  render(){
    return (<Home />);
  }

}

export default App;