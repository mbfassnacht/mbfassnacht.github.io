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
        	<ProjectsGrid></ProjectsGrid>
        	<ProjectsViewer></ProjectsViewer>
        </div>
      );
    }
});

module.exports = Projects;