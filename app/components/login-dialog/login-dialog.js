import React,{ Component,PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import './login-dialog.scss';
import Paper from 'material-ui/Paper';
import Close from 'material-ui/svg-icons/content/clear'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {hidedialog} from '../../actions/logindialog'
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
    render() {
        console.log(this.props);
        return (<div className={"loginWrapper "+this.props.show}>
                <Paper className="content" zDepth={1}>
                    <Close className="close" onTouchTap={this.close} />
                    <div className={"login "+this.state.login}>
                        <h2>登陆</h2>
                        <div className="inputWrapper">
                            <TextField hintText="昵称" style={inputstyle} type="text" />
                            <TextField hintText="密码" style={inputstyle} type="password"/>
                        </div>
                        <RaisedButton label="登陆" primary={true} style={{width:"100%"}} onTouchTap={this.props.login} />
                        <a className="linkregister" href="javascript:void(0);" onTouchStart={this.showregister}>注册账号</a>
                    </div>
                    <div className={"register "+this.state.register}>
                        <h2>登陆</h2>
                        <div className="inputWrapper">
                            <TextField hintText="昵称" style={inputstyle} type="text" />
                            <TextField hintText="密码" style={inputstyle} type="password"/>
                            <TextField hintText="重复密码" style={inputstyle} type="password"/>
                        </div>
                        <RaisedButton label="注册" primary={true} style={{width:"100%"}} onTouchTap={this.props.register} />
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
    login:PropTypes.func,
    register:PropTypes.func
}

export default LoginDialog;