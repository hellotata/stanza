import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './index.scss';

import reducers from './reducers';
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import App from './containers/App';

const render = (Component) => {
  ReactDom.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

if(module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}