import React from 'react';
import Menu from './components/Menu/menu.jsx';
import Preload from 'react-preload';

class App extends React.Component {

    render() {
        var images = [
            '../assets/images/header.png',
            '../assets/images/profile.png',
            '../assets/images/arrow.png',
            '../assets/images/close.svg',
            '../assets/images/contact/email.png',
            '../assets/images/contact/github.png',
            '../assets/images/contact/linkedin.png',
            '../assets/images/contact/npm.png',
            '../assets/images/contact/twitter.png',
            '../assets/images/projects/apia.png',
            '../assets/images/projects/bst.png',
            '../assets/images/projects/buenavianda.png',
            '../assets/images/projects/customizer.png',
            '../assets/images/projects/internetorg.png',
            '../assets/images/projects/k12.png',
            '../assets/images/projects/nfl.png',
            '../assets/images/projects/sonsofgallipoli.png',
            '../assets/images/projects/audi.png',
            '../assets/images/projects/datacenter.png'
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
