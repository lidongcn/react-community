import React,{ Component,PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import './login-dialog.scss';
import Paper from 'material-ui/Paper';
import Close from 'material-ui/svg-icons/content/clear'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {hidedialog} from '../../actions/logindialog';
import {register,loginbyusername} from '../../actions/logindialog';
import {warnremind} from '../../actions/remind';
//import FlatButton from 'material-ui/FlatButton';
class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:'show',
            register:'hide'
        };
        this.showlogin = this.showlogin.bind(this);
        this.showregister = this.showregister.bind(this);
        this.close = this.close.bind(this);
        this.tapregister = this.tapregister.bind(this);
        this.taplogin = this.taplogin.bind(this);
        this.handleNickName = this.handleNickName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
        this.handlerpassword = this.handlerpassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    close(){
        this.props.dispatch(hidedialog());
    }
    showregister(){
        this.setState({
            login:'hide',
            register:'show'
        });
    }
    showlogin(){
        this.setState({
            login:'show',
            register:'hide'
        });
    }
    handleNickName(event){
        this.setState({'nickname':event.target.value});
    }
    handlePassword(event){
        this.setState({'password':event.target.value});
    }
    handleRepeatPassword(event){
        this.setState({'rpassword':event.target.value});
        if(event.target.value===this.state.password){
            return;
        }else{
            this.props.dispatch(warnremind('密码不一致!'),'检查重复密码');
        }
    }
    handlerpassword(event){
        this.setState({'rpassword':event.target.value});
    }
    handlePasswordChange(event){
        this.setState({'password':event.target.value});
    }
    taplogin(){
        const {nickname,password} = this.state;
        if(!nickname||!password){
            this.props.dispatch(warnremind('您有未填项!'));
            return;
        }
        this.props.dispatch(loginbyusername(nickname,password));
    }
    tapregister(){
        const {nickname,password,rpassword} = this.state;
        if(!nickname||!password||!rpassword){
            this.props.dispatch(warnremind('您有未填项!'));
            return;
        }else if(password!=rpassword){
            this.props.dispatch(warnremind('密码不一致!'));
            return;
        }else{
            this.props.dispatch(register(this.state.nickname,this.state.password));
        }
    }
    render() {
        return (<div className={"loginWrapper "+this.props.show}>
                <Paper className="content" zDepth={1}>
                    <Close className="close" onTouchTap={this.close} />
                    <div className={"login "+this.state.login}>
                        <h2>登陆</h2>
                        <div className="inputWrapper">
                            <TextField hintText="昵称" style={inputstyle} type="text" onBlur={this.handleNickName} />
                            <TextField hintText="密码" style={inputstyle} type="password" onChange={this.handlePasswordChange} onBlur={this.handlePassword}/>
                        </div>
                        <RaisedButton label="登陆" primary={true} style={{width:"100%"}} onTouchTap={this.taplogin} />
                        <a className="linkregister" href="javascript:void(0);" onTouchStart={this.showregister}>注册账号</a>
                    </div>
                    <div className={"register "+this.state.register}>
                        <h2>注册</h2>
                        <div className="inputWrapper">
                            <TextField hintText="昵称" style={inputstyle} ref="nickname" type="text" onBlur={this.handleNickName} />
                            <TextField hintText="密码" style={inputstyle} type="password" onBlur={this.handlePassword}/>
                            <TextField hintText="重复密码" style={inputstyle} type="password" onChange={this.handlerpassword} onBlur={this.handleRepeatPassword} />
                        </div>
                        <RaisedButton label="注册" primary={true} style={{width:"100%"}} onTouchTap={this.tapregister} />
                        <a className="linklogin" href="javascript:void(0);" onTouchStart={this.showlogin}>已有账号</a>
                    </div>
                </Paper>
        </div>);
    }
}
const inputstyle={
    width:"100%",
    fontSize:"14px"
}
LoginDialog.propTypes={
    show:PropTypes.string,
}

export default connect(state=>{
    return {}
})(LoginDialog);