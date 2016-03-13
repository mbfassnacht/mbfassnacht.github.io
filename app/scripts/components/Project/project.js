var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./project-model');
var TweenMax = require('gsap');

var Project = React.createClass({
  
	render: function() {  

		return (
		  	<div className="project">
		  		<p className="project-name">{this.props.name}</p>
			</div>
		);
   	}
});

module.exports = Project;