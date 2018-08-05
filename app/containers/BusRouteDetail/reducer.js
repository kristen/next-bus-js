/*
 *
 * BusRouteDetail reducer
 *
 */

import { combineReducers } from 'redux';
import {
  REQUEST_ROUTE,
  REQUEST_ROUTE_SUCCESS,
  REQUEST_ROUTE_FAILURE,
} from './constants';

const route = (state = null, action) => {
  switch (action.type) {
    case REQUEST_ROUTE:
      return state;
    case REQUEST_ROUTE_SUCCESS:
      return action.response.route;
    case REQUEST_ROUTE_FAILURE:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  route,
});
