import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import PlayBar from './PlayBar';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import ProfileDropdown from './ProfileDropdown';
import PanelContainer from './PanelContainer';
import logo from './logo.svg';

import amplifyApp from './store/reducers';
import {addSongToPlayList}  from './store/actions'

import './App.css';


let store = createStore(amplifyApp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <SearchBar/>
          <ProfileDropdown/>
        </nav>
        <PanelContainer/>
        <SideBar/>
        <PlayBar/>
      </div>
    );
  }
}

export default App;
