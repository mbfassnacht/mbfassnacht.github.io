var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./about-model');
var TweenMax = require('gsap');
var THREE = require('three');
var Close = require('../Close/close');

var AboutPreview = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.body = document.body;
		this.divider = this.container.getElementsByClassName('divider')[0];
	},

	hide: function() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 0, zIndex: -100});
		TweenMax.set(this.body, {overflow: 'auto'});
	},

	show: function() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 1, zIndex: 1000});
		TweenMax.set(this.body, {overflow: 'hidden'});
	},

	render: function() {
		return (
			<div className="about">
				<Close></Close>
				<div className="scroll-container">
					<div className="title">{model.title}</div>
					<div className="description">{model.description}</div>
					<div className="signature"></div>
				</div>
			</div>
		);
	}
});

module.exports = AboutPreview;