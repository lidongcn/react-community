import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Comment from 'material-ui/svg-icons/communication/comment';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import Profile from 'material-ui/svg-icons/action/account-circle';
import Post from 'material-ui/svg-icons/action/picture-in-picture';

class My extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <List>
                <ListItem primaryText="个人信息" leftIcon={<Profile />}  />
                <ListItem primaryText="我的说说" leftIcon={<Post />} />
            </List>
        </div>);
    }
}
export default My;