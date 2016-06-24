import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: 'tagnifi-web',
    name: 'TagniFi Web Viewer'
  },
  {
    id: 'progow-web',
    name: 'Progow Website'
  },
  {
    id: 'sevenshadow-web',
    name: 'Seven Shadow LLC Website'
  },
  {
    id: 'the-morning-monte',
    name: 'The Morning Monte'
  },
  {
    id: 'prudena-web',
    name: 'Prudena'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class ProjectsApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects));
      }, delay);
    });
  }

  
}

export default ProjectsApi;