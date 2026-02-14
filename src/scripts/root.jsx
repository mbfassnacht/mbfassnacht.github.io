import React from "react";
import { Router, Route } from "react-router";
import LandingPage from "./pages/landingPage.jsx";
import ProjectsPage from "./pages/projectsPage.jsx";
import App from "./app.jsx";
import createHashHistory from "history/createHashHistory";

const history = createHashHistory();

function Root() {
  return (
    <Router history={history}>
      <div>
        <Route component={App} />
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/projects" component={ProjectsPage}></Route>
      </div>
    </Router>
  );
}

export default Root;
