import { Types } from 'actions';

const people = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
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
    case Types.FETCH_PEOPLE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case Types.RECIEVE_PEOPLE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        peopleIds: action.peopleIds,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
};

export {
 people,
 fetchedPeople
}