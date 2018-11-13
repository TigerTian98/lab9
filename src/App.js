import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  addOne = () => {
    var newCounter = this.state.counter + 1;
    this.setState({
      counter: newCounter
    });
  }

  subtractOne = () => {
    var newCounter = this.state.counter - 1;
    this.setState({
      counter: newCounter
    });
  }

  render() {
    return (
      <div className="App">
        <div id="result"> {this.state.counter} </div>
        <button className="clickableDiv" id="plus" onClick={this.addOne}> + </button>
        <button className="clickableDiv" id="minus" onClick={this.subtractOne}> - </button>
      </div>
    );
  }
}

export default App;
