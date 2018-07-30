import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the nextBusHomePage state domain
 */

const selectNextBusHomePageDomain = state =>
  state.get('nextBusHomePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NextBusHomePage
 */

const makeSelectNextBusHomePage = () =>
  createSelector(selectNextBusHomePageDomain, substate => substate.toJS());

export default makeSelectNextBusHomePage;
export { selectNextBusHomePageDomain };
