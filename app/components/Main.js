/**
 * Created by cbriner on 4/15/16.
 */
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
    render: function() {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionTimeout={500}
                    transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;

