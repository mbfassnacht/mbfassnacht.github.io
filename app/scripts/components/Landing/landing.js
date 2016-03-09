var React = require('react');
var model = require('./landing-model');
var Hero = require('../Hero/hero');
var DescriptionCanvas = require('../DescriptionCanvas/descriptionCanvas');

var Landing = React.createClass({
  
  topicChanged: function(info){
  	this.refs.infoBox.update(info);
  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.refs.hero.onScroll, true);

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