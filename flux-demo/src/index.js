import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyButtonController from './MyButtonController'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyButtonController />, document.getElementById('root'));
registerServiceWorker();
