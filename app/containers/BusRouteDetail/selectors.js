import { createSelector } from 'reselect';

/**
 * Direct selector to the busRouteDetail state domain
 */

const selectBusRouteDetailDomain = state => state.busRouteDetail;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BusRouteDetail
 */

const makeSelectBusRouteDetail = () =>
  createSelector(selectBusRouteDetailDomain, substate => substate);

export default makeSelectBusRouteDetail;
export { selectBusRouteDetailDomain };
