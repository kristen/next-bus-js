import {
  requestRoutes,
  requestRoutesSuccess,
  requestRoutesFailure,
} from '../actions';
import {
  REQUEST_ROUTES,
  REQUEST_ROUTES_FAILURE,
  REQUEST_ROUTES_SUCCESS,
} from '../constants';

describe('NextBusHomePage actions', () => {
  describe('REQUEST_ROUTES Action', () => {
    it('has a type of REQUEST_ROUTES', () => {
      const expected = {
        type: REQUEST_ROUTES,
      };
      expect(requestRoutes()).toEqual(expected);
    });
  });

  describe('REQUEST_ROUTES_SUCCESS Action', () => {
    it('has a type of REQUEST_ROUTES_SUCCESS', () => {
      const response = 'response';
      const expected = {
        type: REQUEST_ROUTES_SUCCESS,
        response,
      };
      expect(requestRoutesSuccess(response)).toEqual(expected);
    });
  });

  describe('REQUEST_ROUTES_FAILURE Action', () => {
    it('has a type of REQUEST_ROUTES_FAILURE', () => {
      const error = 'error';
      const expected = {
        type: REQUEST_ROUTES_FAILURE,
        error,
      };
      expect(requestRoutesFailure(error)).toEqual(expected);
    });
  });
});
