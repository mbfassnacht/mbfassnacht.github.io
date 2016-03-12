var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./arrow-model');
var TweenMax = require('gsap');
var ScrollManager = require('scroll-manager');

var Arrow = React.createClass({

	componentDidMount: function() {
		this.hidden = false;
		this.scroller =  new ScrollManager();
		this.container = ReactDOM.findDOMNode(this);
  		TweenMax.to(this.container, 0.4, {delay:0.8, autoAlpha: 1});
	},

	handleMouseDown: function(){
		this.scroller.scrollTo({element: document.body, to: window.innerHeight, duration: 0.8, ease:'easeOutCubic'});
	},

	render: function() {
		return (
			<div id="arrow" className="white circle-button" onMouseDown={this.handleMouseDown}>
				<img className="image-arrow" src={model.arrow}></img>
			</div>
		);
	}
});

module.exports = Arrow;