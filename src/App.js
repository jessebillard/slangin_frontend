import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AddSlangButton from './components/AddSlangButton';
import NewSlangForm from './containers/NewSlangForm';
import SlangContainer from './containers/SlangContainer'
import SlangDetailsCard from './components/SlangDetailsCard';


class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>            
              <div className="main">
                  <NavBar />
                  <Switch>
                    <Route path={'/slang/:sayingId'} component={SlangDetailsCard} />
                    <Route path="/regions" component={SlangContainer} />
                    <Route path="/newslang" component={NewSlangForm} />
                    <Route path="/" component={HomePage} />
                  </Switch>
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
