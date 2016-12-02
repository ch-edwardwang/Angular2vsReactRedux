/**
 *  Point of contact for actions
 *
 *  ie: import { Person } from 'actions';
 *
 */


import * as Types from './action-types/action-types';
import { addPerson, addPeople, fetchPeople, receivePeople, requestPeople } from './people-actions/people-actions'


export {
  addPerson,
  addPeople,
  fetchPeople,
  requestPeople,
  receivePeople,
  Types
}