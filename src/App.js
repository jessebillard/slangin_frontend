import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Router>
          <React.Fragment>            
              <div id="main">
                  <NavBar />
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/newslang" component={NewSlangForm} />
                  {/* <Route exact path="/regions/" /> */}
                  <AddSlangButton />
              </div>            
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
