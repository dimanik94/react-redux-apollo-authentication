import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
	from
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { createStore, StoreEnhancer } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import { logIn } from './redux/actions/authActions';

import './index.css';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer;
	}
}

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const httpLink = createHttpLink({
	uri: 'http://localhost:4000/api'
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

const client = new ApolloClient({
	link: from([authLink, httpLink]),
	cache: new InMemoryCache()
});

const token = localStorage.getItem('token');

if (token) {
	store.dispatch(logIn());
}

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById('root')
);
