import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AddSlangButton from './components/AddSlangButton';
import NewSlangForm from './containers/NewSlangForm';
import SlangContainer from './containers/SlangContainer'
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
                  <Route exact path={`/regions/${this.props.region}`} component={SlangContainer} />
                  <AddSlangButton />
              </div>            
          </React.Fragment>
        </Router>
    );
  }
}

//connect this to the store so that the SlangContainer route path can be dynamically set?
const mapStateToProps = (state) => {
  return {
    region: state.selectedRegion
  }
}

export default connect(mapStateToProps)(App);
