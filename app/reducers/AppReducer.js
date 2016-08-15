import { combineReducers } from 'redux';
import test from './TestReducer';
import post from './PostReducer';
import fetch from './FetchReducer';
import remind from './RemindReducer';
import logindialog from './LoginDialogReducer';
export default combineReducers({
    //引入reducer
    test,post,fetch,remind,logindialog
});