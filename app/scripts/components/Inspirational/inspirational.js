var React = require('react');
var model = require('./inspirational-model');
var ScrollManager = require('scroll-manager');

var Inspirational = React.createClass({

  componentDidMount: function() {
    this.scroller =  new ScrollManager();
    this.scroller.scrollTop({element: document.body, duration: 0.4, ease:'easeOutExpo'});
  },

  render: function() {    
  	return (
        <div id="inspirational">
        	<h1 className="title">{model.title}</h1>
        </div>
      );
    }
});

module.exports = Inspirational;