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
  		this.image = this.container.getElementsByClassName('image-arrow')[0];

	},

	handleMouseDown: function(){
		this.scroller.scrollTo({element: document.body, to: window.innerHeight, duration: 0.8, ease:'easeOutCubic'});
	},

	handleMouseEnter: function(){
  		TweenMax.to(this.image, 0.4, {autoAlpha: 0.5});
	},

	handleMouseLeave: function(){
  		TweenMax.to(this.image, 0.4, {autoAlpha: 1});
	},

	render: function() {
		return (
			<div id="arrow" className="white circle-button" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onMouseDown={this.handleMouseDown}>
				<img className="image-arrow" src={model.arrow}></img>
			</div>
		);
	}
});

module.exports = Arrow;