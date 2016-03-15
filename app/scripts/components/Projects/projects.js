var React = require('react');
var model = require('./projects-model');
var ProjectsGrid = require('../ProjectsGrid/projectsGrid');
var ProjectsViewer = require('../ProjectsViewer/projectsViewer');
var ScrollManager = require('scroll-manager');

var Projects = React.createClass({

  componentDidMount: function() {
    this.scroller =  new ScrollManager();
    this.scroller.scrollTop({element: document.body, duration: 0.4, ease:'easeOutExpo'});
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