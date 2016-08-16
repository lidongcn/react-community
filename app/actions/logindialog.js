import {successremind} from './remind';
export function showdialog(){
    return {
        type:'showdialog',
        data:''
    }
}
export function hidedialog(){
    return {
        type:'hidedialog',
        data:''
    }
}
export function register(username,password){
    return dispatch => {
        AV.User.signUp(username,password)
            .then(function(e){
                dispatch(hidedialog());
                dispatch(successremind('注册成功!'));

            },function(error){console.log(error)});
    }
}
export function loginbyusername(username,password){
    return dispatch => {
        AV.User.logIn(username,password)
            .then(function(e){
                dispatch(hidedialog());
            },function(error){
                console.log(error);
            });
    }
}