import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import awsconfig from './aws-exports';
import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById('root'));

