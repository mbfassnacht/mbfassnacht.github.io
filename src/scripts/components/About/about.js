require('styles/components/About/about.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
import Close from '../Close/close';

var model = require('./about-model');

class About extends React.Component {

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
		this.body = document.body;
		this.divider = this.container.getElementsByClassName('divider')[0];
		this.scrollContainer = this.container.getElementsByClassName('scroll-container')[0];

	}

	closeHandler() {
		this.hide();
	}

	hide() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 0, zIndex: -100});
		TweenMax.set(this.body, {overflow: 'auto'});
		this.refs.close.animateOut();
	}

	show() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 1, zIndex: 1000});
		TweenMax.set(this.body, {overflow: 'hidden'});
		var height = window.innerHeight - 50 + 'px';
		TweenMax.set(this.scrollContainer, {height: height});
		this.refs.close.animateIn();
	}

	render() {
		return (
			<div className="about">
				<div className="close-icon">
					<Close ref={'close'} onClicked={this.closeHandler.bind(this)} ></Close>
				</div>
				<div className="scroll-container">
					<div className="title">{model.title}</div>
					<div className="description">
						{
						  	model.description.map(function(object, i){
								return <p key={i} ref="{object.ref}" >
								{model.description[i]}
								</p>;
						    }.bind(this))
						}

					</div>
					<div className="phrase-container">
						<div className="phrase">"{model.phrase}"</div>
						<div className="author">{model.author}</div>
					</div>
				</div>
			</div>
		);
	}
}

About.defaultProps = {

};

export default About;
