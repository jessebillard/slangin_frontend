import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AddSlangButton from './components/AddSlangButton';
import NewSlangForm from './containers/NewSlangForm';
import SlangDetailsCard from './components/SlangDetailsCard';
import SlangTitleCard from './components/SlangTitleCard';

class App extends Component {
  render() {
    return (
      <div id="main">
        <NavBar />
        <HomePage />
        <br />
        <AddSlangButton />
        {/* <br /> */}
        {/* <NewSlangForm /> */}
        <br />
        {/* <SlangDetailsCard /> */}
        <SlangTitleCard />
      </div>
    );
  }
}

export default App;
