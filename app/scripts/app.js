var React = require('react');
var Landing = require('./components/Landing/landing');
var Preload = require('react-preload').Preload;

var App = React.createClass({

  render: function() {
  	var loadingIndicator = (<div className="loader"></div>);
	var images = ["../assets/images/header.png"];


    /*jshint ignore:start */
    return (
    	<Preload
		  loadingIndicator={loadingIndicator}
		  images={images}
		  autoResolveDelay={3000}
		  onError={this._handleImageLoadError}
		  onSuccess={this._handleImageLoadSuccess}
		  resolveOnError={true}
		  mountChildren={true}
		  >
	      <app>
	        <Landing ref={'landing'}></Landing>
	      </app>
		</Preload>


    );
    /*jshint ignore:end */
  }
});

module.exports = App;