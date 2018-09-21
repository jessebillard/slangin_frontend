import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NewSlangForm from './containers/NewSlangForm';
import SlangContainer from './containers/SlangContainer'
import SlangDetailsCard from './components/SlangDetailsCard';
import AboutPage from './components/aboutPage';

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>            
                  <NavBar />
              <div className="main">
                  <Switch>
                    <Route path={'/slang/:sayingId'} component={SlangDetailsCard} />
                    <Route path="/tags" component={SlangContainer} />
                    <Route path="/regions" component={SlangContainer} />
                    <Route path="/newslang" component={NewSlangForm} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/" component={HomePage} />
                  </Switch>                  
              </div>            
          </React.Fragment>
        </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    region: state.selectedRegion
  }
}

export default connect(mapStateToProps)(App);
