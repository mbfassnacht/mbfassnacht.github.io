var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./projectsPreview-model');
var TweenMax = require('gsap');
var THREE = require('three');
var Link = require('react-router').Link;

var ProjectsPreview = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.divider = this.container.getElementsByClassName('divider')[0];

	},

	handleMouseEnter: function(){
		TweenMax.to(this.divider, 0.4, {width:'60%'});
	},

	handleMouseLeave: function(){
		TweenMax.to(this.divider, 0.4, {width:'10%'});
	},

	render: function() {
		return (
			<div className="projects-preview">
				<div className="container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
					<Link to="projects" className="title">{model.title}</Link>
					<div className="divider"></div>
				</div>
			</div>
		);
	}
});

module.exports = ProjectsPreview;