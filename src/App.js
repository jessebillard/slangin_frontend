import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div id="main">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
