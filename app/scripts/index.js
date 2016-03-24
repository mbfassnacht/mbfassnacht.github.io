var ReactDOM = require('react-dom');
var React = require('react');
var App = require('./app.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory  = require('react-router/lib/hashHistory');
var Projects = require('./components/Projects/projects');
var Inspirational = require('./components/Inspirational/inspirational');
var About = require('./components/About/about');
var Landing = require('./components/Landing/landing');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route name="app" path="/" component={App}>
		    <IndexRoute name="home" component={Landing}/>
			<Route name="projects" path="projects" component={Projects}/>
			<Route name="inspirational-stuff" path="inspirational-stuff" component={Inspirational}/>
		</Route>
	</Router>,
	document.getElementById('app-container')
);