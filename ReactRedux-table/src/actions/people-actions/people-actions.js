import * as types from '../action-types/action-types';

const AddPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person
  };
}

export default AddPerson;