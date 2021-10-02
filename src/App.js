import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchESG } from "./API";


class App extends React.Component {

  inputArray = ['FB', 'AAPL'];

  outputArray = [];

  state = {
    'CS' : '',
    'ES' : '',
    'GS' : '',
    'SS' : '',
    'TES' : ''
  }

  async componentDidMount () {
    this.inputArray.forEach((inputTicker) => {
      this.handleRequest(inputTicker);
    })

    console.log(this.inputArray);
    console.log(this.outputArray);
  }

  handleRequest = async (inputTicker) => {
    const fetchedESG = await fetchESG(inputTicker);

    console.log(fetchedESG);

    this.setState({
      CS: fetchedESG["Controversy Score"],
      ES: fetchedESG["Environment Score"],
      GS: fetchedESG["Governance Score"],
      SS: fetchedESG["Social Score"],
      TES: fetchedESG["Total ESG Score"]
    })

    console.log(this.state);

    this.outputArray.push(this.state);

    console.log(this.outputArray);
  }

  
  render () {
    return (
      <div></div>
    )
  }
}

export default App;