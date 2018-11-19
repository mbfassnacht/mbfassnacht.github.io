require('../../../styles/components/AboutPreview/aboutPreview.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
import About from '../About/About.jsx';
var model = require('./aboutPreview-model');

class AboutPreview extends React.Component {

	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this);
		this.divider = this.container.getElementsByClassName('divider')[0];

	}

	handleMouseEnter() {
		TweenMax.to(this.divider, 0.4, {width:'60%'});
	}

	handleMouseLeave() {
		TweenMax.to(this.divider, 0.4, {width:'10%'});
	}

	handleMouseDown() {
		this.refs.about.show();
	}

	render() {
		return (
			<div className="about-preview">
				<div className="container"
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
					onMouseDown={this.handleMouseDown.bind(this)}
					>
					<span className="title">{model.title}</span>
					<div className="divider"></div>
				</div>
				<About ref={'about'}></About>
			</div>
		);
	}
}

AboutPreview.defaultProps = {

};

export default AboutPreview;
