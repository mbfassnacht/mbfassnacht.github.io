var React = require('react');
var model = require('./landing-model');
var Hero = require('../Hero/hero');
var DescriptionCanvas = require('../DescriptionCanvas/descriptionCanvas');
var Contact = require('../Contact/contact');

var Landing = React.createClass({

  componentDidMount: function() {
    window.addEventListener('scroll', this.refs.hero.onScroll, true);
  },

  render: function() {    
  	return (
        <div id="landing">
          <Hero ref={'hero'}></Hero>
          <DescriptionCanvas></DescriptionCanvas>
          <Contact></Contact>
        </div>
      );
    }
});

module.exports = Landing;