import { Types } from 'actions';

const people = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};

export default people