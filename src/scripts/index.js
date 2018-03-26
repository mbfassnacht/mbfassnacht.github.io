import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/createHashHistory';
import Root from './root';

const rootEl = document.getElementById('app-container');
const history = createHashHistory();

ReactDOM.render(<Root history={history} />, rootEl);
