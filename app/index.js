import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Redirect , Link ,IndexRoute,hashHistory } from 'react-router';
import Public from './containers/Public';
import appReducers from './reducers/AppReducer';
import Home from './containers/Home';
import Login from './containers/Login';
function init(){
    islogined();
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore),
        store = createStoreWithMiddleware(appReducers);
        store.subscribe(()=>console.log(store.getState()));
    render((
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={Public}>
                        <IndexRoute component={Home}/>
                        <Route path="user" onEnter={onEnter} />
                        <Route path="login" component={Login} />
                    </Route>
                </Router>
            </Provider>
    ),
    document.getElementById('app')
)
}
var islogin = false;
function onEnter(nextState,replaceState){
    if(islogin){
        return true;
    }else{
        replaceState(null,'/login');
    }
}
function islogined(){
    const user = new AV.User();
    islogin = user.authenticated();
}
init()