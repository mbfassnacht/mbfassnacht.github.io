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
				  		return (<div className="project-row">
					  		{
						  		object.map(function(project, i){
									return (<Project 
					    				ref={'project'+i}
					    				name={project.name}
					    				image={project.image}
					    				key={i}/>);
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