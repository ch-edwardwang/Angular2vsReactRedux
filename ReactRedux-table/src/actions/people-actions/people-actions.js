import * as types from '../action-types/action-types';

const AddPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person
  };
}

const FetchPeople = () => {
  return {
    type: types.FETCH_PEOPLE
  };
}

const ReceivePeople = (json) => {
  return {
    type: types.RECIEVE_PEOPLE,
    people: json.data,
    receivedAt: Date.now()
  }
}

export {
  AddPerson,
  FetchPeople,
  ReceivePeople
}