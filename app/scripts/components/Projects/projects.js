var React = require('react');
var model = require('./projects-model');
var ProjectsGrid = require('../ProjectsGrid/projectsGrid');
var ProjectsViewer = require('../ProjectsViewer/projectsViewer');

var Projects = React.createClass({

  componentDidMount: function() {

  },

  render: function() {    
  	return (
        <div id="projects">
        	<h1 className="title">{model.title}</h1>
        	<ProjectsGrid></ProjectsGrid>
        	<ProjectsViewer></ProjectsViewer>
        </div>
      );
    }
});

module.exports = Projects;