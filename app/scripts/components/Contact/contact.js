var React = require('react');
var model = require('./contact-model');

var Contact = React.createClass({
  
  componentDidMount: function() {

  },

  render: function() {  
  
  	return (
	  <div id="contact" className="section contact">
	    <h2 className="title">CONTACT ME</h2>
	    <ul className="socials container-fluid">
	      <li className="col-xs-2 col-xs-offset-1">
	        <a href="mailto:maximobelen@me.com">
	          <img src="./images/contact/email.png"></img>
	          <p>EMAIL</p>
	        </a>
	      </li>
	      <li className="col-xs-2">
	        <a href="http://twitter.com/maximobelen">
	          <img src="./images/contact/twitter.png"></img>
	          <p>TWITTER</p>
	        </a>
	      </li>
	      <li className="col-xs-2">
	        <a href="https://www.npmjs.com/~maximobelen">
	          <img src="./images/contact/npm.png"></img>
	          <p>NPM</p>
	        </a>
	      </li>
	      <li className="col-xs-2">
	        <a href="https://github.com/maximobelen">
	          <img src="./images/contact/github.png"></img>
	          <p>GITHUB</p>
	        </a>
	      </li>
	      <li className="col-xs-2">
	        <a href="https://uy.linkedin.com/in/maximobelen">
	          <img src="./images/contact/linkedin.png"></img>
	          <p>LINKEDIN</p>
	        </a>
	      </li>
	    </ul>
	  </div>
      );
    }
});

module.exports = Contact;