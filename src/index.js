import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import configureStore from './State/Store'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
//Initialization
const store = configureStore()
//root element
const rootElement = document.getElementById('root');
//render function
const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>
    ,
    rootElement
  );
};
//call render
renderApp(Main);
serviceWorker.unregister();
