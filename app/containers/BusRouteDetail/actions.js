import {
  REQUEST_ROUTE,
  REQUEST_ROUTE_SUCCESS,
  REQUEST_ROUTE_FAILURE,
} from './constants';

/*
 *
 * BusRouteDetail actions
 *
 */

export const requestRoute = route => ({
  type: REQUEST_ROUTE,
  route,
});

export const requestRouteSuccess = response => ({
  type: REQUEST_ROUTE_SUCCESS,
  response,
});

export const requestRouteFailure = error => ({
  type: REQUEST_ROUTE_FAILURE,
  error,
});
