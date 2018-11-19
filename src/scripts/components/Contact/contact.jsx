require('../../../styles/components/Contact/contact.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {TweenMax, Expo} from 'gsap';

var model = require('./contact-model');

class Contact extends React.Component {


	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
		this.divider = this.container.getElementsByClassName('divider')[0];
		this.title = this.container.getElementsByClassName('title')[0];
		this.linkNames = this.container.getElementsByClassName('link-name');
		this.defaultColor = '#ffffff';
	}

	handleMouseEnter() {
		TweenMax.to(this.divider, 0.4, {delay:0.2, width:'25%', ease: Expo.easeOut});
	}

	handleMouseLeave() {
		TweenMax.to(this.divider, 0.4, {width:'10%', ease: Expo.easeOut});
	}

	render() {

		return (
		  	<div id="contact" className="section contact">
				<h2 className="title">{model.title}</h2>
				<div className="divider"></div>

				<ul className="socials container-fluid">
				{
				  	model.socials.map(function(object, i){

						return <li key={i} ref="{object.ref}" >
							<a href={object.href} target="_blank" onMouseEnter={this.handleMouseEnter.bind(this, object.color)} onMouseLeave={this.handleMouseLeave.bind(this)}>
								<img src={object.img}></img>
								<p className="link-name">{object.title}</p>
							</a>
						</li>;
				    }.bind(this))
				}
				</ul>
				<div className="quick-data">
					<p>{model.location}</p>
					<p>{model.email}</p>
				</div>
				<div className="terms-container">
					<p>{model.terms}</p>
				</div>
			</div>
		);
   	}
}

Contact.defaultProps = {

};

export default Contact;
