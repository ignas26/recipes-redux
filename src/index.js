import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import activeRecipeReducer from './reducers/activeRecipeReducer';
import recipesReducer from './reducers/recipesReducer';

const rootReducer = combineReducers({
      active: activeRecipeReducer,
      recipes: recipesReducer
    });

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
