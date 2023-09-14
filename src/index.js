
import ReactDOM from 'react-dom/client';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import './index.css';
import App from './App';

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)