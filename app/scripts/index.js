var ReactDOM = require('react-dom');
var React = require('react');
var App = require('./app.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router/lib/browserHistory');
var Projects = require('./components/Projects/projects');
var Landing = require('./components/Landing/landing');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route name="app" path="/" component={App}>
		    <IndexRoute name="home" component={Landing}/>
			<Route name="projects" path="projects" component={Projects}/>
		</Route>
	</Router>,
	document.getElementById('app-container')
);