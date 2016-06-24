import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ProjectListRow = ({project}) => {
  return (
    <tr>
      <td>
        <Link to={`/project/${project.id}`} className="btn btn-primary btn-lg">{project.name}</Link>
      </td>
    </tr>
  );

};

ProjectListRow.propTypes= {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;