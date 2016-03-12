var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./aboutPreview-model');
var TweenMax = require('gsap');
var THREE = require('three');
var About = require('../About/About');
var AboutPreview = React.createClass({

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

	handleMouseDown: function(){
		this.refs.about.show();
	},

	render: function() {
		return (
			<div className="about-preview">
				<div className="container" 
					onMouseEnter={this.handleMouseEnter} 
					onMouseLeave={this.handleMouseLeave} 
					onMouseDown={this.handleMouseDown}
					>
					<span className="title">{model.title}</span>
					<div className="divider"></div>
				</div>
				<About ref={'about'}></About>
			</div>
		);
	}
});

module.exports = AboutPreview;