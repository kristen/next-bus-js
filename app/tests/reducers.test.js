/**
 * Test route reducer
 */

import { LOCATION_CHANGE } from 'react-router-redux';
import { route } from '../reducers';

describe('route reducer', () => {
  it('should return the initial state', () => {
    const initialState = { location: 'bar' };
    expect(route(initialState, {})).toEqual(initialState);
  });

  it('should handle the location_change action correctly', () => {
    const state = { location: 'somewhere' };
    const payload = 'elsewhere';
    const action = { type: LOCATION_CHANGE, payload };

    const expectedState = { location: payload };
    const resultState = route(state, action);
    expect(resultState).toEqual(expectedState);
  });
});
