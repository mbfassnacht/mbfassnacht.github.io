require('normalize.css/normalize.css');
require('../../styles/App.scss');
require('../../styles/pages/projectsPage.scss');
import React from 'react';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid.jsx';

class ProjectsPage extends React.Component {

    render() {
        var props = this.props;
        return (
            <div id="projects" className="app container-fluid">
                <h1 className="title">PROJECTS</h1>
                <ProjectsGrid {...props} ></ProjectsGrid>
            </div>
        );
    }
}

ProjectsPage.defaultProps = {

};

export default ProjectsPage;
