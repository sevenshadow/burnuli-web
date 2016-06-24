import React, {PropTypes} from 'react';

const ProjectListRow = ({project}) => {
  return (
    <tr>
      <td>{project.name}</td>
    </tr>
  );

};

ProjectListRow.propTypes= {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;