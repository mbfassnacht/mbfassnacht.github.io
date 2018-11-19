require('normalize.css/normalize.css');
require('../../styles/App.scss');

import React from 'react';
import Hero from '../components/Hero/hero.jsx';
import DescriptionCanvas from '../components/DescriptionCanvas/descriptionCanvas.jsx';
import ProjectsPreview from '../components/ProjectsPreview/projectsPreview.jsx';
import AboutPreview from '../components/AboutPreview/aboutPreview.jsx';
import Contact from '../components/Contact/contact.jsx';
import ScrollManager from 'scroll-manager';

class LandingPage extends React.Component {

    componentDidMount() {
        this.scroller =  new ScrollManager();
        this.scroller.scrollTop({element: document.body, duration: 0.4, ease:'easeOutExpo'});
    }

    render() {
        var props = this.props;
        return (
            <div className="app container-fluid" id="landing">
                <Hero {...props} ref={'hero'}></Hero>
                <DescriptionCanvas {...props} ref={'descriptionCanvas'}></DescriptionCanvas>
                <ProjectsPreview {...props}></ProjectsPreview>
                <AboutPreview {...props}></AboutPreview>
                <Contact {...props}></Contact>
            </div>
        );
    }
}

LandingPage.defaultProps = {

};

export default LandingPage;
