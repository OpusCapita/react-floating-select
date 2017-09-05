/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';
import FloatingSelect from './components/floating-select/floating-select.component';

import './app.component.scss';


const composeEnhancers = (process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  combineReducers({
    intl: intlReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

render((
  <Provider store={store}>
    <IntlProvider>
      <Router history={hashHistory}>
        <Route path="/" component={FloatingSelect} />
      </Router>
    </IntlProvider>
  </Provider>
), document.getElementById('oc-examples'));
