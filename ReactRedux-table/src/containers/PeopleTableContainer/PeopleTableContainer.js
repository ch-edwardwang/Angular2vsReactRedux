import React, { /*PropTypes,*/ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PeopleTable, PersonInput } from 'components';
import { fetchPeople, addPerson } from 'actions';

class PeopleTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.props.actions.fetchPeople();
  }

  render() {
    const { people } = this.props;

    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
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
    actions: {
      fetchPeople: bindActionCreators(fetchPeople, dispatch),
      addPerson: bindActionCreators(addPerson, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleTableContainer);
