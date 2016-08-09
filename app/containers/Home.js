import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {getpostlist} from '../actions/post';
import '../public/scss/main.scss';
import BottomLoading from '../components/loading/bottom-loading';
import IconButton from 'material-ui/IconButton';
import {successremind} from '../actions/remind';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Homeicon from 'material-ui/svg-icons/action/home';
import Notifications from 'material-ui/svg-icons/social/notifications';
import Assignment from 'material-ui/svg-icons/action/assignment-ind';
import './Home.scss';
import PostItem from './PostItem';
import Notification from './Notification';
import My from './My';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            nodata:false,
            size:3,
            postlist: [],
            slideIndex:0,
        }
        this.handleAccounts=this.handleAccounts.bind(this);
        this._scroll=this._scroll.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //props.dispatch(getpostlist());
    }
    handleChange(value){
        this.setState({
            slideIndex:value,
        });
    }
    componentDidMount(){
        this.props.dispatch(getpostlist(1,3,this.handleAccounts));
        //const fetch = this.props.fetch;
        window.addEventListener('scroll',this._scroll,false)
    }
    _scroll(){
            if(window.scrollY+window.innerHeight+10>document.body.clientHeight){
                if(this.state.nodata){
                    //console.log('没有数据了哈');
                    this.props.dispatch(successremind('没有数据了哈'));
                    return;
                }
                const page = this.state.postlist.length/this.state.size+1;
                this.props.dispatch(getpostlist(page,this.state.size,this.handleAccounts));
            }

    }

    handleAccounts(postlist) {
        if(postlist.length<this.state.size){
            this.setState({nodata:true});
            if(postlist.length==0){
                return;
            }
        }
        if(this.state.postlist.length){
            const result = this.state.postlist.concat(postlist);
            this.setState({postlist:result})
        }else{
            this.setState({postlist:postlist});
        }
    }

    render(){
        //const styles = {
        //    slide: {
        //        padding: 15,
        //        minHeight: 100,
        //        color: '#fff',
        //    },
        //    slide1: {
        //        background: '#FEA900',
        //    },
        //    slide2: {
        //        background: '#B3DC4A',
        //    },
        //    slide3: {
        //        background: '#6AC0FF',
        //    },
        //};
        const list= this.state.postlist.map((value,index)=>{
            return (<div key={index}>
                <PostItem nickName={value.nickName} companyName={value.companyName} portrait={value.portrait} content={value.contetn} facepic={value.facepic?value.facepic:''} content={value.content} />
                </div>
            );
        });
        //return (<div>
        //    {list}
        //</div>)
        return (
            <div>
                <Tabs style={{position:"fixed",top:0,width:"100%",zIndex:'1000'}}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab icon={<Homeicon />} value={0} />
                    <Tab icon={<Notifications />} value={1} />
                    <Tab icon={<Assignment />} value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                    animateTransitions={false}
                >
                    <div className="slide">
                        {list}
                        <BottomLoading show={this.props.fetch.postlist} />
                    </div>
                    <div className="slide">
                        <Notification />
                    </div>
                    <div className="slide">
                        <My />
                    </div>
                </SwipeableViews>
            </div>
        )
        //return (
        //    <SwipeableViews>
        //        <div style={Object.assign({}, styles.slide, styles.slide1)}>
        //            {list}
        //        </div>
        //        <div style={Object.assign({}, styles.slide, styles.slide2)}>
        //            slide n°2
        //        </div>
        //        <div style={Object.assign({}, styles.slide, styles.slide3)}>
        //            slide n°3
        //        </div>
        //    </SwipeableViews>
        //);
    }
}
export default connect(state=>{
    return {
        fetch:state.fetch
    }
})(Home);