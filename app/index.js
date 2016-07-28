import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Redirect , Link ,IndexRoute,hashHistory } from 'react-router';
import appReducers from './reducers/AppReducer';
import Home from './containers/Home'
function init(){
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore),
        store = createStoreWithMiddleware(appReducers);
    render((
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                </Router>
            </Provider>
    ),
    document.getElementById('app')
)
}
init()