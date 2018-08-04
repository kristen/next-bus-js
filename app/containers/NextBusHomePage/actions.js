import {
  REQUEST_ROUTES,
  REQUEST_ROUTES_SUCCESS,
  REQUEST_ROUTES_FAILURE,
  SELECT_ROUTE,
} from './constants';

/*
 *
 * NextBusHomePage actions
 *
 */

export const requestRoutes = () => ({
  type: REQUEST_ROUTES,
});

export const requestRoutesSuccess = response => ({
  type: REQUEST_ROUTES_SUCCESS,
  response,
});

export const requestRoutesFailure = error => ({
  type: REQUEST_ROUTES_FAILURE,
  error,
});

export const selectRoute = route => ({
  type: SELECT_ROUTE,
  route,
});
