import React,{ Component,PropTypes } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LazyLoad from 'react-lazy-load';
import ActionGrade from 'material-ui/svg-icons/action/grade';

class PostItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgstyle ={
            width:'100%',
            height:"200px"
        }
        const {nickName,companyName,portrait,facepic,content} = this.props;
        return (
            <Card>
                <CardHeader
                    title={nickName}
                    subtitle={companyName}
                    avatar={portrait}
                />
                <div style={facepic?{}:{display:"none"}}>
                    <CardMedia>
                        <LazyLoad
                            offsetTop={200}
                            height={200}
                            onContentVisible={() => console.log('look ma I have been lazyloaded!')}
                        >
                            <img src={facepic} style={imgstyle} />
                        </LazyLoad>
                    </CardMedia>
                </div>
                <CardText>
                    {content}
                </CardText>
                <CardActions>
                    <FlatButton icon={<ActionGrade color="yellow" />} />
                    <FlatButton label="评论" />
                </CardActions>
            </Card>
       );
    }
}
PostItem.propTypes = {
    nickName:PropTypes.string.isRequired,
    companyName:PropTypes.string,
    portrait:PropTypes.string,
    content:PropTypes.string,
    facepic:PropTypes.string
}

export default PostItem;