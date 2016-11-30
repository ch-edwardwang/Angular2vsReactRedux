import * as types from '../action-types/action-types';

const addPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person
  };
}

const requestPeople = () => {
  return {
    type: types.REQUEST_PEOPLE
  }
}

const receivePeople = (json) => {
  return {
    type: types.RECIEVE_PEOPLE,
    people: json,
    receivedAt: Date.now()
  }
}

const fetchPeople = () => {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPeople());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receivePeople(json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

export {
  addPerson,
  fetchPeople,
  receivePeople,
  requestPeople
}