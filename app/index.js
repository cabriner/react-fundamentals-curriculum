/**
 * Created by cbriner on 4/15/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);