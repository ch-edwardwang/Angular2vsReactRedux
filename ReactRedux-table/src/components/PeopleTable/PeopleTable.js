import React, {PropTypes} from 'react';
import { Person } from 'components';

const PeopleTable = ({people}) => {
  const styles = {
    tableWrapper: {
      margin: '10px'
    }
  };

  return (
    <div style={styles.tableWrapper} >
      {people.map((person) =>
        <Person key={person.lastname} person={person} />
      )}
    </div>
  );
};

PeopleTable.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleTable;
