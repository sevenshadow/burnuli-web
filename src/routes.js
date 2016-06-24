import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProjectsPage from './components/projects/ProjectsPage';
import ServicesPage from './components/services/ServicesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="services" component={ServicesPage} />
    <Route path="projects" component={ProjectsPage} />
    
  </Route>
);
