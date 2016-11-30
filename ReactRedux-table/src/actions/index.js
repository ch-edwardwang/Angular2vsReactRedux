/**
 *  Point of contact for actions
 *
 *  ie: import { Person } from 'actions';
 *
 */


import * as Types from './action-types/action-types';
import { AddPerson, FetchPeople } from './people-actions/people-actions'


export {
  Types,
  AddPerson,
  FetchPeople
}