require('../../../styles/components/Arrow/arrow.scss');
import React from 'react';
import ReactDOM  from'react-dom';
import model from './arrow-model';
import { TweenMax } from 'gsap';
import ScrollManager from 'scroll-manager';

class Arrow extends React.Component {

	componentDidMount() {
		this.hidden = false;
		this.scroller =  new ScrollManager();
		this.container = ReactDOM.findDOMNode(this);
  	TweenMax.to(this.container, 0.4, {delay:0.8, autoAlpha: 1});
  	this.image = this.container.getElementsByClassName('image-arrow')[0];
	}

	handleMouseDown() {
		this.scroller.scrollTo({element: document.body, to: window.innerHeight, duration: 0.8, ease:'easeOutCubic'});
	}

	handleMouseEnter() {
  		TweenMax.to(this.image, 0.4, {autoAlpha: 0.5});
	}

	handleMouseLeave() {
  		TweenMax.to(this.image, 0.4, {autoAlpha: 1});
	}

	render() {
		return (
			<div id="arrow" className="white circle-button" onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} onClick={this.handleMouseDown.bind(this)}>
				<img className="image-arrow" src={model.arrow} />
			</div>
		);
	}
}

Arrow.defaultProps = {

};

export default Arrow;
