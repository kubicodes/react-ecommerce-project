import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {' '}
      //for correct routing with gh pages
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
