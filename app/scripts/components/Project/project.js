var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./project-model');
var TweenMax = require('gsap');

var Project = React.createClass({
  
	render: function() {  

		return (
		  	<div className="project">
		  		<div className="content-container">
			  		<div className="image-container">
			  			<img className="image" src={this.props.image}></img>
					</div>
				</div>
			</div>
		);
   	}
});

module.exports = Project;