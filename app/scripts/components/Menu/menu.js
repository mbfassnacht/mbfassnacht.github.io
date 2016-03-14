var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./menu-model');
var TweenMax = require('gsap');
var Link = require('react-router').Link;
var Close = require('../Close/close');

var Menu = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.links = this.container.getElementsByClassName('link');
		this.contactTitle = this.container.getElementsByClassName('contact-title')[0];

		this.opener = this.refs.opener;
		this.opened = false;
		this.isAnimating = false;
		
		this.opener.addEventListener('click', function() {
			if (!this.opened) {
				this.open();
			}
		}.bind(this));
	},

	open: function() {
		if (!this.opened && !this.isAnimating) {
			this.isAnimating = true;
			TweenMax.fromTo(this.refs.menu, 0.4,{width: 0}, {width: 300});
			TweenMax.staggerTo(this.links, 0.2, { delay:0.4, autoAlpha: 1}, 0.1, function(){
				this.opened = true;
				this.isAnimating = false;
			}.bind(this));
			this.refs.close.animateIn();

			TweenMax.fromTo(this.contactTitle, 0.4,{autoAlpha: 0}, {delay: 0.6, autoAlpha: 1});

		}
	},

	close: function() {
		if (this.opened && !this.isAnimating) {
			this.isAnimating = true;
			TweenMax.fromTo(this.contactTitle, 0.4,{autoAlpha: 1}, {delay: 0.3, autoAlpha: 0});
			TweenMax.staggerTo(this.links, 0.2, { autoAlpha: 0}, 0.1);
			TweenMax.to(this.refs.menu, 0.4, { delay:1, width: 0, onComplete: function(){
				this.opened = false;
				this.isAnimating = false;
			}.bind(this)});
			this.refs.close.animateOut();
		}

	},

	render: function() {
		return (
			<div className="menu">
				<div ref={'opener'} className="opener">{model.title}</div>
				<div ref={'menu'} className="real-menu">
					<div className="close-icon">
						<Close ref={'close'} onClicked={this.close} ></Close>
					</div>
					<div className="list">
					{
					  	model.links.map(function(object, i){
							return <div className="link" key={i}>
								<Link to={object.to} className="link">
									{object.title}
								</Link>
							</div>;
					    }.bind(this))
					}
					</div>
					<div className="contact-container">
						<div className="contact-title">{model.contact.title}</div>
						<div className="contact-list">
						{
						  	model.contact.links.map(function(object, i){
								return <div key={i} className="link">
									<a href={object.href} className="link" target="_blank">
										<p className="link-name">{object.title}</p>
									</a>
								</div>;
						    }.bind(this))
						}
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Menu;