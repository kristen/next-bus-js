import { createSelector } from 'reselect';

/**
 * Direct selector to the nextBusHomePage state domain
 */

const selectNextBusHomePageDomain = state => state.nextBusHomePage;

/**
 * Other specific selectors
 */

const makeSelectRoutes = () =>
  createSelector(
    selectNextBusHomePageDomain,
    nextBusHome => nextBusHome.routes,
  );

/**
 * Default selector used by NextBusHomePage
 */

const makeSelectNextBusHomePage = () =>
  createSelector(selectNextBusHomePageDomain, substate => substate);

export default makeSelectNextBusHomePage;
export { selectNextBusHomePageDomain, makeSelectRoutes };
