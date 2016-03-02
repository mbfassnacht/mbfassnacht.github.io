var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./avatar-model');
var TweenMax = require('gsap');

var Avatar = React.createClass({

	animateImage: function (scrollTop) {
		console.log(scrollTop);
		if (this.imageHide && scrollTop > 150) {
			this.imageHide = false;
			TweenMax.fromTo(this.image, 0.8, {autoAlpha: 0, scaleX: 0.2, scaleY: 0.2}, 
				{autoAlpha: 1, scaleX: 1, scaleY: 1, ease: Power2.easeOut});

			TweenMax.fromTo(this.container, 0.8, {autoAlpha: 0, scaleX: 0.2, scaleY: 0.2}, 
				{autoAlpha: 1, scaleX: 1, scaleY: 1, ease: Power2.easeOut});
		} else {
			if (!this.imageHide && scrollTop < 100) {
				this.imageHide = true;
				TweenMax.fromTo(this.image, 0.8, {autoAlpha: 1, scaleX: 1, scaleY: 1}, 
			    	{autoAlpha: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeOut});

				TweenMax.fromTo(this.container, 0.8, {autoAlpha: 1, scaleX: 1, scaleY: 1}, 
					{autoAlpha: 0, scaleX: 0.2, scaleY: 0.2, ease: Power2.easeOut});
			}
		}
	},

	componentDidMount: function() {
		this.imageHide = true;
		this.container = ReactDOM.findDOMNode(this);
	 	this.image = this.container.getElementsByClassName('image')[0];

	},

	render: function() {
		return (
			<div className="avatar">
				<img className="image" src={model.profileImage}></img>
			</div>
		);
	}
});

module.exports = Avatar;