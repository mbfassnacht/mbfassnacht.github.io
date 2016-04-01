var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./project-model');
var TweenMax = require('gsap');

var Project = React.createClass({
  	
	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.hoverContainer = this.container.getElementsByClassName('hover-container')[0];
		
		this.name = this.container.getElementsByClassName('project-name')[0];
		this.client = this.container.getElementsByClassName('project-client')[0];
		this.description = this.container.getElementsByClassName('project-description')[0];
		this.skills = this.container.getElementsByClassName('project-skills')[0];

		this.animateArray = [this.name, this.client, this.description, this.skills];
		this.reverseAnimateArray = [this.skills, this.description, this.client, this.name];
		this.isAnimating = false;
		this.requestedAnimateOut = false;

		window.addEventListener('resize', this.handleResize, true);
		this.handleResize();
	},

  	handleResize: function() {
  		this.container.style.width = this.container.parentNode.clientWidth / 2;
	},

  	handleMouseEnter: function() {
  		if (!this.isAnimating) {
			this.isAnimating = true;

			TweenMax.to(this.hoverContainer, 0.4, {autoAlpha: 1, ease: Expo.easeOut});
			TweenMax.staggerFromTo(this.animateArray, 0.4, {autoAlpha: 0, y:15}, {autoAlpha: 1, y:0, ease: Expo.easeOut}, 0.2, function(){
				this.isAnimating = false;
				if(this.requestedAnimateOut) {
					this.handleMouseLeave();
				}
			}.bind(this));
		}
	},

	handleMouseLeave: function() {
		if (!this.isAnimating) {
			this.isAnimating = true;
			this.requestedAnimateOut = false;

			TweenMax.staggerFromTo(this.reverseAnimateArray, 0.4, {autoAlpha: 1, y:0}, {autoAlpha: 0, y:15, ease: Expo.easeOut}, 0.2);
			TweenMax.to(this.hoverContainer, 0.4, {delay: 0.6, autoAlpha: 0, ease: Expo.easeOut, onComplete: function(){
				this.isAnimating = false;
			}.bind(this)});		
		} else {
			this.requestedAnimateOut = true;
		}

	},

	render: function() {  

		return (
		  	<div className="project" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
		  		<div className="content-container">
			  		<div className="image-container">
			  			<img className="image" src={this.props.image}></img>
					</div>
					<div className="hover-container">
			  			<div className="project-name">{this.props.name}</div>
			  			<div className="project-client">
			  				A project for {this.props.client}
			  			</div>
			  			<div className="project-description">
			  				{this.props.description}
			  			</div>
			  			<div className="project-skills">
			  				<span className="techno-title">Technologies: </span>
			  				{this.props.technologies}
			  			</div>
					</div>
				</div>
			</div>
		);
   	}
});

module.exports = Project;