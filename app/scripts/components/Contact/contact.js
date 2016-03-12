var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./contact-model');
var TweenMax = require('gsap');

var Contact = React.createClass({
  
	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.divider = this.container.getElementsByClassName('divider')[0];
		this.title = this.container.getElementsByClassName('title')[0];
		this.linkNames = this.container.getElementsByClassName('link-name');
		this.defaultColor = '#ffffff';
	},

	handleMouseEnter: function(color) {
		// TweenMax.to(this.container, 0.4, {'backgroundColor': color, ease: Expo.easeOut});
		TweenMax.to(this.divider, 0.4, {delay:0.2, width:'25%', ease: Expo.easeOut});
		// TweenMax.to(this.title, 0.4, {color:'#ffffff', ease: Expo.easeOut});
		// TweenMax.to(this.linkNames, 0.4, {delay:0.2, color:'#ffffff', ease: Expo.easeOut});
	},

	handleMouseLeave: function() {
		// TweenMax.to(this.container, 0.4, {'backgroundColor': this.defaultColor});
		TweenMax.to(this.divider, 0.4, {width:'10%', ease: Expo.easeOut});
		// TweenMax.to(this.title, 0.4, {color:'#000000', ease: Expo.easeOut});
		// TweenMax.to(this.linkNames, 0.4, {delay:0.2, color:'#000000', ease: Expo.easeOut});
	},

	render: function() {  

		return (
		  	<div id="contact" className="section contact">
				<h2 className="title">CONTACT ME</h2>
				<div className="divider"></div>

				<ul className="socials container-fluid">
				{
				  	model.socials.map(function(object, i){
				    	 
						return <li key={i} ref="{object.ref}" >
							<a href={object.href} target="_blank" onMouseEnter={this.handleMouseEnter.bind(this, object.color)} onMouseLeave={this.handleMouseLeave}>
								<img src={object.img}></img>
								<p className="link-name">{object.title}</p>
							</a>
						</li>;
				    }.bind(this))
				}
				</ul>
				<div className="quick-data">
					<p>Montevideo - Uruguay</p>
					<p>maximobelen@me.com</p>
				</div>
				<div className="terms-container">
					<p>Máximo Belén - All Rights Reserved ®</p>
				</div>
			</div>
		);
   	}
});

module.exports = Contact;