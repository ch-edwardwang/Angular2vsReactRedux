import React, { /*PropTypes,*/ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PeopleTable, PersonInput } from 'presenters';
import { fetchPeople, addPerson } from 'actions';

class PeopleTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: {}
    };
  }

  componentDidMount() {
    this.props.actions.fetchPeople();
  }

  render() {
    const { people, actions } = this.props;

    return (
      <div>
        <PersonInput addPerson={actions.addPerson} />
        {people ? <PeopleTable {...people} /> : null }
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    people: state.people
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
