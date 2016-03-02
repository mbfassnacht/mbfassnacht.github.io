var React = require('react');
var model = require('./landing-model');
var Hero = require('../Hero/hero');

var Landing = React.createClass({
  
  topicChanged: function(info){
  	this.refs.infoBox.update(info);
  },

  render: function() {  
    var topicChanged = this.topicChanged;
  
  	return (
        <div id="landing">
          <Hero ref={'hero'}></Hero>
        </div>
      );
    }
});

module.exports = Landing;