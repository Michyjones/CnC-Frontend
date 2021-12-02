import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-react';
import { Provider } from 'react-redux';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './api/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
