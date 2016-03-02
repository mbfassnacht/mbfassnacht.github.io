var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./arrow-model');
var TweenMax = require('gsap');

var Arrow = React.createClass({
	
	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);

  		TweenMax.to(this.container, 0.4, {delay:0.8, autoAlpha: 1});

	},

	render: function() {
		return (
			<div id="arrow" className="white circle-button">
				<span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
			</div>
		);
	}
});

module.exports = Arrow;