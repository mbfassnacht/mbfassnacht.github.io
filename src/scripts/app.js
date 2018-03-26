import React from 'react';
import Menu from './components/Menu/menu';
import Preload from 'react-preload';

class App extends React.Component {

    render() {
        var images = [
            '../images/header.png',
            '../images/profile.png',
            '../images/arrow.png',
            '../images/close.svg',
            '../images/contact/email.png',
            '../images/contact/github.png',
            '../images/contact/linkedin.png',
            '../images/contact/npm.png',
            '../images/contact/twitter.png',
            '../images/projects/apia.png',
            '../images/projects/bst.png',
            '../images/projects/buenavianda.png',
            '../images/projects/customizer.png',
            '../images/projects/internetorg.png',
            '../images/projects/k12.png',
            '../images/projects/nfl.png',
            '../images/projects/sonsofgallipoli.png',
            '../images/projects/audi.png',
            '../images/projects/datacenter.png'
        ];

        var loadingIndicator = (<div className='loader'></div>);

        return (
            <Preload
                loadingIndicator={loadingIndicator}
                images={images}
                onError={this._handleImageLoadError}
                onSuccess={this._handleImageLoadSuccess}
                resolveOnError={true}
                mountChildren={true}
                >
                <div>
                    <Menu></Menu>
                    {this.props.children}
                </div>
            </Preload>
        );

  }
}

module.exports = App;
