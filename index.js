import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import config from './aws-exports';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
