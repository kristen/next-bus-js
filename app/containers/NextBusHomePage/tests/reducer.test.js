import { fromJS } from 'immutable';
import nextBusHomePageReducer from '../reducer';

describe('nextBusHomePageReducer', () => {
  it('returns the initial state', () => {
    expect(nextBusHomePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
