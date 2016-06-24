import React, {PropTypes} from 'react';
import ProjectListRow from './ProjectListRow';

const ProjectList = ({projects}) => {
  return (
      <table className="table">
        <tbody>
          {projects.map(project => 
            <ProjectListRow key={project.id} project={project} />
          )}
        </tbody>
      </table>
    
  );

};

ProjectList.propTypes= {
  projects: PropTypes.array.isRequired
};

export default ProjectList;