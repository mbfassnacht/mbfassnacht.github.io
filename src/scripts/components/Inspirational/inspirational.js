var React = require('react');
var model = require('./inspirational-model');
var ScrollManager = require('scroll-manager');

class Inspirational extends React.Component {

  componentDidMount: function() {
    this.scroller =  new ScrollManager();
    this.scroller.scrollTop({element: document.body, duration: 0.4, ease:'easeOutExpo'});
  }

  render: function() {
  	return (
        <div id="inspirational">
        	<h1 className="title">{model.title}</h1>
        </div>
      );
    }
}

Inspirational.defaultProps = {

};

export default Inspirational;
