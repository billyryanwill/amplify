import React, { Component } from 'react';
import PlayBar from './PlayBar';
import SideBar from './SideBar'
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <SideBar/>
        <PlayBar/>
      </div>
    );
  }
}

export default App;
