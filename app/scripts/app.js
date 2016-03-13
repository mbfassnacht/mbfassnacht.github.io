var React = require('react');
var Landing = require('./components/Landing/landing');
var Preload = require('react-preload').Preload;

var App = React.createClass({

  render: function() {
  	var images = [
  		"../assets/images/header.png",
  		"../assets/images/profile.png",
      "../assets/images/arrow.png",
      "../assets/images/cross.svg",
      "../assets/images/signature.png",
  		"../assets/images/contact/email.png",
  		"../assets/images/contact/github.png",
  		"../assets/images/contact/linkedin.png",
  		"../assets/images/contact/npm.png",
  		"../assets/images/contact/twitter.png",
      "../assets/images/contact/apia.png",
      "../assets/images/contact/bst.png",
      "../assets/images/contact/buenavianda.png",
      "../assets/images/contact/customizer.png",
      "../assets/images/contact/internetorg.png",
      "../assets/images/contact/k12.png",
      "../assets/images/contact/nfl.png",
      "../assets/images/contact/sonsofgallipoli.png"
  	];

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
        {this.props.children}
    </Preload>
    );

  }
});

module.exports = App;