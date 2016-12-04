import React from 'react';
import { Person } from 'presenters';
import _ from 'lodash';

const PeopleTable = (people) => {
  const styles = {
    tableWrapper: {
      margin: '10px'
    }
  };

  return (
    <div style={styles.tableWrapper} >
      {_.map(people, (person, id) =>
        <Person key={id} person={person} />
      )}
    </div>
  );
};

export default PeopleTable;
