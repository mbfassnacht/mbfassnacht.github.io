var React = require('react');
var model = require('./hero-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');
var Arrow = require('../Arrow/arrow');

var Hero = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);

		var name = this.container.getElementsByClassName('name')[0];
  		var job = this.container.getElementsByClassName('job')[0];

  		TweenMax.fromTo(name, 0.4, {autoAlpha: 0, y: 50}, {delay: 0.4, autoAlpha: 1, y: 0, ease: Power2.easeOut});
  		TweenMax.fromTo(job, 0.4, {autoAlpha: 0, y: 50}, {delay: 0.6, autoAlpha: 1, y: 0, ease: Power2.easeOut});

	},
	
	render: function() {
		return (
			<div id="hero">
				<div className="background-image"></div>
				<div className="container">
					<h2 className="title-text name">{model.name}</h2>
					<h3 className="title-text job">{model.job}</h3>
				</div>
				<Arrow ref={'arrow'}></Arrow>
			</div>
		);
	}
});

module.exports = Hero;