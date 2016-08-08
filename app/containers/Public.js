import React,{ Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Snackbar from 'material-ui/Snackbar';
import '../public/scss/main.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const lightMuiTheme = getMuiTheme(lightBaseTheme);
class Public extends Component{
    constructor(props){
        super(props);
        this.handleRequestClose=this.handleRequestClose.bind(this);
    }
    handleRequestClose(){
        this.setState({
            open: false,
        });
    };
    render(){
        const halfscreen = window.screen.width/2;
        return (
            <div>
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <div>
                    {this.props.children}
                    <RefreshIndicator
                        percentage={100}
                        size={50}
                        left={halfscreen-25}
                        top={100}
                        color={"red"} // Overridden by percentage={100}
                        status="hide"
                    />
                    <Snackbar
                        open={this.props.remind.open}
                        message={this.props.remind.message}
                        action={this.props.remind.action}
                        autoHideDuration={2000}
                        //onActionTouchTap={this.handleActionTouchTap}
                        //onRequestClose={this.handleRequestClose}
                    />
                </div>
            </MuiThemeProvider>
            </div>
        )
    }
}
export default connect(state=>{
    return {
        remind:state.remind
    }
})(Public)