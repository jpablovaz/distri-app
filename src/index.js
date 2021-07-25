import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import 'styles/layout.css';
import 'styles/tags.css';
import 'styles/utility.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import entitiesReducer from './store/table/entity/reducer';
import filteredReducer from './store/table/filtered/reducer';
import paginatedReducer from './store/table/paginated/reducer';
import footerReducer from './store/table/footer/reducer';
import criteriaReducer from './store/table/criteria/reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const rootReducer = combineReducers({
	entities: entitiesReducer,
	filtered: filteredReducer,
	paginated: paginatedReducer,
	criteria: criteriaReducer,
	footer: footerReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}><App /></Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
