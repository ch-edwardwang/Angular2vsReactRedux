import React, { PropTypes, Component } from 'react';
import { PeopleTable } from 'components';

class PeopleTableContainer extends Component {

  render() {
    // React-Thunk/React-Promise
    // API call
    const { people } = this.props;

    return (
      <div>
        <PeopleTable people={people} />
      </div>
    );
  }
}

PeopleTableContainer.propTypes = {
  people: PropTypes.array.isRequired
};


export default PeopleTableContainer;
