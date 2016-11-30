import React, {PropTypes} from 'react';

const Person = ({person}) => {
  const styles = {
    fullName: {
      padding: '5px',
      color: 'black'
    }
  };

  return (
    <div style={styles.fullName} >
      {person.lastname}, {person.firstname}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;
