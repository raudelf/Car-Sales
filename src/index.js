import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducer
import { emptyReducer as reducer } from './reducers';

// Styles
import 'bulma/css/bulma.css';
import './styles.scss';

// createStore
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement);
