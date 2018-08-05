/**
 *
 * NextBusHomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectRoutes } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import BusRoute from '../../components/BusRoute';
import BusRouteDirection from '../../components/BusRouteDirection';

/* eslint-disable react/prefer-stateless-function */
export class NextBusHomePage extends React.Component {
  componentDidMount() {
    this.props.requestRoutes();
  }

  render() {
    const { routes } = this.props;
    return (
      <div>
        {routes.map(route => (
          <div key={route.tag}>
            <BusRoute {...route} />
            {route.direction.map(direction => (
              <BusRouteDirection
                key={direction.tag}
                {...direction}
                routeTag={route.tag}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

NextBusHomePage.propTypes = {
  requestRoutes: PropTypes.func.isRequired,
  routes: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  routes: makeSelectRoutes(),
});

const withConnect = connect(
  mapStateToProps,
  actions,
);

const withReducer = injectReducer({ key: 'nextBusHomePage', reducer });
const withSaga = injectSaga({ key: 'nextBusHomePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NextBusHomePage);
