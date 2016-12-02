import { combineReducers } from 'redux';
import { people, fetchedPeople } from './people-reducer/people-reducer';

const rootReducer = combineReducers({
  people,
  fetchedPeople
});

export default rootReducer;
