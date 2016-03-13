var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./projectsGrid-model');
var TweenMax = require('gsap');
var Project = require('../Project/project');

var ProjectsGrid = React.createClass({

	render: function() {  

		return (
		  	<div className="projects-grid">
		  		{
				  	model.projects.map(function(object, i){
						return <Project 
		    				ref={'project'+i}
		    				name={object.name}
		    				key={i}/>;
				    }.bind(this))
				}
			</div>
		);
   	}
});

module.exports = ProjectsGrid;