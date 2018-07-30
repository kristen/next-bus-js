/*
 *
 * NextBusHomePage reducer
 *
 */

import { combineReducers } from 'redux';
import {
  REQUEST_ROUTES,
  REQUEST_ROUTES_SUCCESS,
  REQUEST_ROUTES_FAILURE,
} from './constants';

export const routes = (state = [], action) => {
  switch (action.type) {
    case REQUEST_ROUTES:
      return state;
    case REQUEST_ROUTES_SUCCESS:
      return action.response.data.route;
    case REQUEST_ROUTES_FAILURE:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  routes,
});
