import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import '../../public/scss/main.scss';
import './bottom-loading.scss';
class BottomLoading extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className={"bottomloading"+" "+this.props.show}>
            <div className="loadingWrapper">
                <RefreshIndicator size={40} status={this.props.show} top={0} left={0} />
            </div>
        </div>)
    }
}
export default BottomLoading;