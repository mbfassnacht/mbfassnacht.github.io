require('styles/components/Hero/hero.scss');

import React from 'react';
import {TweenMax, Power2} from 'gsap';
import Arrow from '../Arrow/arrow';
import ReactDOM from 'react-dom';

var model = require('./hero-model');

class Hero extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);

		var name = this.container.getElementsByClassName('name')[0];
  		var job = this.container.getElementsByClassName('job')[0];

  		TweenMax.fromTo(name, 0.4, {autoAlpha: 0, y: 50}, {delay: 0.4, autoAlpha: 1, y: 0, ease: Power2.easeOut});
  		TweenMax.fromTo(job, 0.4, {autoAlpha: 0, y: 50}, {delay: 0.6, autoAlpha: 1, y: 0, ease: Power2.easeOut});

	}

	render() {
		return (
			<div id="hero">
				<div className="background-image"></div>
				<div className="container">
					<h2 className="title-text name">{model.name}</h2>
					<h3 className="title-text job">{model.job}</h3>
				</div>
				<Arrow ref={'arrow'}></Arrow>
			</div>
        );
	}
}

Hero.defaultProps = {

};

export default Hero;
