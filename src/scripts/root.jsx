import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import LandingPage from './pages/landingPage.jsx';
import ProjectsPage from './pages/projectsPage.jsx';
import App from './app.jsx';
import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();

export default class Root extends Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route component={App}/>
                    <Route exact name='home' path='/' component={LandingPage}></Route>
                    <Route name='projects' path='/projects' component={ProjectsPage}></Route>
                </div>
            </Router>
        );
    }
}
