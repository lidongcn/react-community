import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div>{this.props.test.test}</div>);
    }
}
export default connect(state=>{
    return {
        test:state.test
    }
})(Home);