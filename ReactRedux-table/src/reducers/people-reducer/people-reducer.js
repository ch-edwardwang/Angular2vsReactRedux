import { Types } from 'actions';

export default (state = [], action) => {
  switch (action.type) {
    case Types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
};
