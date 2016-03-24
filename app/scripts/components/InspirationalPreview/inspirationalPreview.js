var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./inspirationalPreview-model');
var TweenMax = require('gsap');
var Link = require('react-router').Link;

var InspirationalPreview = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.divider = this.container.getElementsByClassName('divider')[0];

	},

	handleMouseEnter: function(){
		TweenMax.to(this.divider, 0.4, {width:'60%'});
	},

	handleMouseLeave: function(){
		TweenMax.to(this.divider, 0.4, {width:'10%'});
	},

	render: function() {
		return (
			<div className="inspirational-preview">
				<div className="container" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
					<Link to="inspirational-stuff" className="title">{model.title}</Link>
					<div className="divider"></div>
				</div>
			</div>
		);
	}
});

module.exports = InspirationalPreview;