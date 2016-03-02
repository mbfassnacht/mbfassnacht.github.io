var React = require('react');
var model = require('./arrow-model');

var Arrow = React.createClass({

	render: function() {
		return (
			<div id="arrow" className="white circle-button">
				<span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
			</div>
		);
	}
});

module.exports = Arrow;