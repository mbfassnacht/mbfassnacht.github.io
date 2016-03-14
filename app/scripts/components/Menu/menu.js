var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./menu-model');
var TweenMax = require('gsap');
var Close = require('../Close/close');

var Menu = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.links = this.container.getElementsByClassName('link');
		this.opener = this.refs.opener;
		this.opened = false;
		this.isAnimating = false;
		this.opener.addEventListener('click', function() {
			if (this.opened) {
				this.close();
			} else {
				this.open();
			}
		}.bind(this));
	},

	closeHandler: function(value) {
		this.hide();
	},

	open: function() {
		if (!this.opened && !this.isAnimating) {
			this.isAnimating = true;
			TweenMax.to(this.refs.menu, 0.4, {width: 300});
			TweenMax.staggerTo(this.links, 0.4, { delay:0.4, autoAlpha: 1},0.2, function(){
				this.opened = true;
				this.isAnimating = false;
			}.bind(this));
		}
	},

	close: function() {
		if (this.opened && !this.isAnimating) {
			this.isAnimating = true;
			TweenMax.staggerTo(this.links, 0.4, { autoAlpha: 0},0.2, function(){
				this.opened = true;
				this.isAnimating = false;
			}.bind(this));
			TweenMax.to(this.refs.menu, 0.4, { delay:0.8, width: 0, onComplete: function(){
				this.opened = false;
				this.isAnimating = false;
			}.bind(this)});
		}

	},

	render: function() {
		return (
			<div className="menu">
				<div ref={'opener'} className="opener">{model.title}</div>
				<div ref={'menu'} className="real-menu">
					<div className="list">
					{
					  	model.links.map(function(object, i){
					    	 
							return <div key={i} className="link">
								{object.title}
							</div>;
					    }.bind(this))
					}
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Menu;