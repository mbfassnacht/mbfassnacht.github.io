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
				  		return (<div className="project-row" key={i}>
					  		{
						  		object.map(function(project, j){
									return (<Project 
					    				ref={'project'+j}
					    				name={project.name}
					    				image={project.image}
					    				key={j}/>);
						  		})
					  		}
						</div>);

				    }.bind(this))
				}
			</div>
		);
   	}
});

module.exports = ProjectsGrid;