import { Types } from 'actions';
import _ from 'lodash';

const people = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_PEOPLE:
      let p = {};
      _.forEach(action.people, (person) => {
        p[person.id] = person;
      })
      return {...state, ...p};
    case Types.ADD_PERSON:
      return {...state, [action.person.id]: action.person };
    default:
      return state;
  }
};

const fetchedPeople = (state = {
    isFetching: false,
    didInvalidate: false,
    peopleIds: []
  }, action ) => {
  switch (action.type) {
    case Types.REQUEST_PEOPLE:
      return {...state,
        isFetching: true,
        didInvalidate: false
      }
    case Types.RECIEVE_PEOPLE:
      return {...state,
        isFetching: false,
        didInvalidate: false,
        peopleIds: _.map(action.people, 'id'),
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
};

export {
 people,
 fetchedPeople
}