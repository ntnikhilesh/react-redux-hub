import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//react with redux

import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
