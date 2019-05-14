import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const Store = createStore(reducers);

ReactDOM.render(
	<Provider store={Store}>
		<App>hello</App>
	</Provider>,
	document.getElementById('root')
);
