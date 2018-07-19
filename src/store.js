import { createStore, applyMiddleware, compose } from 'redux'
import sayingsReducer from './reducers/sayingsReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"


export function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(sayingsReducer, composeEnhancers(applyMiddleware(thunk))
  );
}

export const store = configureStore()