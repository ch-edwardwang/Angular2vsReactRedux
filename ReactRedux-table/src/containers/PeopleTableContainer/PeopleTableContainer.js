import React, { /*PropTypes,*/ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PeopleTable } from 'components';
import { fetchPeople } from 'actions';

class PeopleTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const { people } = this.props;

    return (
      <div>
        {people ? <PeopleTable people={people} /> : null }
      </div>
    );
  }
}

// PeopleTableContainer.propTypes = {
//   people: PropTypes.array.isRequired
// };

// TODO: adding filter to the table
// const getVisiblePeople = (people, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return people
//     case 'SHOW_ALIVE':
//       return people.filter(t => t.alive)
//     case 'SHOW_DEAD':
//       return people.filter(t => !t.alive)
//   }
// }

var mapStateToProps = (state) => {
  return {
    // people: getVisiblePeople(state.people, state.visibilityFilter)
    people: state.fetchedPeople.people
  };
}
var mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople: bindActionCreators(fetchPeople, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleTableContainer);
// export default PeopleTableContainer;
