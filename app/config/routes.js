/**
 * Created by cbriner on 4/15/16.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var PromptContainer = require('../containers/PromptContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' component={ConfirmBattleContainer} />
            <Route path='results' component={ResultsContainer} />
        </Route>
    </Router>
);

module.exports = routes;