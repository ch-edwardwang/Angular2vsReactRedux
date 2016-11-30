import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PeopleTableContainer } from 'containers';

class App extends Component {
  render() {

    // Temp, used to inimitate a server response.
    // To be replaced Redux action which stores
    // it's results in Redux State.
    // Also using with Redux-Thunk/Redux-Promise.
    const people = [
      { firstname: 'Ed1', lastname: 'Wang1' },
      { firstname: 'Ed2', lastname: 'Wang2' },
      { firstname: 'Ed3', lastname: 'Wang3' }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Table.</h2>
          <PeopleTableContainer people={people} />
        </div>
      </div>
    );
  }
}

export default App;
