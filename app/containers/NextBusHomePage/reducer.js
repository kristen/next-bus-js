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
    case REQUEST_ROUTES_SUCCESS: {
      return action.response.route.map(route => {
        if (route.direction && route.direction.length) {
          return {
            ...route,
            direction: route.direction.sort(compareDirection),
          };
        }
        return { ...route, direction: [route.direction] };
      });
    }
    case REQUEST_ROUTES_FAILURE:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  routes,
});

const compareDirection = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};
