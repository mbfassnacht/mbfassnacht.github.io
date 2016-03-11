var React = require('react');
var Landing = require('./components/Landing/landing');
var Contact = require('./components/Contact/contact');
var Preload = require('react-preload').Preload;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router/lib/browserHistory');

var App = React.createClass({

  render: function() {
  	var images = [
  		"../assets/images/header.png",
  		"../assets/images/profile.png",
  		"../assets/images/contact/email.png",
  		"../assets/images/contact/github.png",
  		"../assets/images/contact/linkedin.png",
  		"../assets/images/contact/npm.png",
  		"../assets/images/contact/twitter.png"
  	];

  	/*jshint ignore:start */
  	var loadingIndicator = (<div className="loader"></div>);

    return (
    	<Preload
		  loadingIndicator={loadingIndicator}
		  images={images}
		  onError={this._handleImageLoadError}
		  onSuccess={this._handleImageLoadSuccess}
		  resolveOnError={true}
		  mountChildren={true}
		  >
	      <Router history={browserHistory}>
		    <Route path="/" component={Landing}>
		      <Route path="*" component={Landing}/>
		    </Route>
		  </Router>
		</Preload>
    );
    /*jshint ignore:end */
  }
});

module.exports = App;