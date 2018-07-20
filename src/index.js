import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store.js';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
// import 'semantic-ui-css/semantic.min.css'
// import HomePage from './components/HomePage';
// import NavBar from './components/NavBar';
// import AddSlangButton from './components/AddSlangButton';
// import NewSlangForm from './containers/NewSlangForm';
// import SlangDetailsCard from './components/SlangDetailsCard';
// import SlangTitleCard from './components/SlangTitleCard';

// console.log(store.getState())

ReactDOM.render(    
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
// registerServiceWorker();
