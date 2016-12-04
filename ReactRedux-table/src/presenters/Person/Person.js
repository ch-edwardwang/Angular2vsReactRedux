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
      {person.name}, {person.phone}, {person.email}
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;
