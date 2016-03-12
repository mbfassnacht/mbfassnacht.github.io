var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./close-model');
var TweenMax = require('gsap');
var loadsvg = require('load-svg');
 
var Close = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		loadsvg(model.closeIcon, function (err, svg) {
		    this.container.appendChild(svg);
		}.bind(this));
	},

	handleMouseDown: function(){

	},

	handleMouseEnter: function(){
		TweenMax.to(this.container, 0.4, {rotation: "90"});

	},

	handleMouseLeave: function(){
		TweenMax.to(this.container, 0.4, {rotation: "-90"});

	},

	render: function() {
		return (
			<div className="close" onMouseDown={this.handleMouseDown} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
			</div>
		);
	}
});

module.exports = Close;