import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Comment from 'material-ui/svg-icons/communication/comment';
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <List>
                <ListItem primaryText="喜欢" leftIcon={<ActionGrade />} rightIcon={<Badge badgeContent={4}
      primary={true}  />} />
                <ListItem primaryText="评论" leftIcon={<Comment />} rightIcon={<Badge badgeContent={4}
      primary={true}  />} />
            </List>
        </div>);
    }
}
export default Notification;